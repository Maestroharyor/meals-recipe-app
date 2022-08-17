import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MealsDataType, RootStackParamList } from "../data/dataTypes";
import { AntDesign } from "@expo/vector-icons";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { toggleFavorites } from "../store/favourites/action";

type categoryMealsProps = NativeStackScreenProps<
  RootStackParamList,
  "mealDetailScreen"
>;

type Props = {};

const MealDetailScreen = ({ route, navigation }: categoryMealsProps) => {
  const item = route.params.meal;
  const dispatch = useDispatch();
  const favoriteMeals: MealsDataType[] = useSelector(
    (state: any) => state.favorites
  );

  const isFavMeal = favoriteMeals.some((meal) => meal.id === item.id);

  console.log(isFavMeal);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: item.title,
      headerRight: (props) => (
        <TouchableOpacity
          onPress={() => {
            dispatch(toggleFavorites(item.id));
          }}
        >
          <View style={{ marginRight: 10 }}>
            <AntDesign
              name={isFavMeal ? "heart" : "hearto"}
              size={22}
              color="white"
            />
          </View>
        </TouchableOpacity>
      ),
    });
  }, [isFavMeal]);

  return (
    <ScrollView>
      <Card style={{ width: "100%", marginBottom: 30, borderRadius: 0 }}>
        <Card.Content>
          <Title style={{ marginBottom: 16, fontWeight: "bold" }}>
            {item.title}
          </Title>
        </Card.Content>
        <Card.Cover source={{ uri: item.imageUrl }} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 8,
            paddingHorizontal: 10,
          }}
        >
          <Text>{item.duration}m</Text>
          <Text>{item.complexity}</Text>
          <Text>{item.affordability}</Text>
        </View>
      </Card>

      <View>
        <View>
          <Text style={styles.title}>Ingredients</Text>
        </View>
        <View>
          {item.ingredients.map((ingredient) => (
            <View key={ingredient} style={styles.listItem}>
              <Text>{ingredient}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={{ paddingBottom: 30 }}>
        <View>
          <Text style={styles.title}>Steps</Text>
        </View>
        <View>
          {item.steps.map((step) => (
            <View key={step} style={styles.listItem}>
              <Text>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 20,
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
