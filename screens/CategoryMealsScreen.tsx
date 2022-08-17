import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import React, { useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../data/dataTypes";
import { MEALS } from "../data/data";
import { filterDataType, MealsDataType } from "../data/dataTypes";
import MealCard from "../components/MealCard";

type categoryMealsProps = NativeStackScreenProps<
  RootStackParamList,
  "categoriesMealsScreen"
>;

const CategoryMealsScreen = ({ route, navigation }: categoryMealsProps) => {
  const filters: filterDataType = useSelector((state: any) => state.filters);
  const favoriteMeals: MealsDataType[] = useSelector(
    (state: any) => state.favorites
  );
  const item = route.params;

  const meals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(item.id) >= 0
  ).filter((meal) => {
    if (filters.isGlutenFree && !meal.isGlutenFree) {
      return false;
    }
    if (filters.isLactoseFree && !meal.isLactoseFree) {
      return false;
    }
    if (filters.isVegan && !meal.isVegan) {
      return false;
    }
    if (filters.isVegetarian && !meal.isVegetarian) {
      return false;
    }
    return true;
  });

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: item.title });
  }, []);
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: meals.length ? "center" : "flex-start",
        flex: 1,
      }}
    >
      {!meals.length && (
        <View style={{ marginTop: 20 }}>
          <Text>No meals found in selected category</Text>
        </View>
      )}
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <MealCard
            item={item.item}
            navFunction={() => {
              navigation.navigate("mealDetailScreen", {
                meal: item.item,
                // isFavMeal: favoriteMeals.some((meal) => meal.id === meal.id),
              });
            }}
          />
        )}
        style={{
          width: "100%",
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      />
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({});
