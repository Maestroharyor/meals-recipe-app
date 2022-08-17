import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { MEALS } from "../data/data";
import MealCard from "../components/MealCard";
import { MaterialIcons } from "@expo/vector-icons";

const FavouritesScreen = ({ navigation }: any) => {
  const favoriteMeals = useSelector((state: any) => state.favorites);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: (props: any) => (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <View style={{ marginLeft: 10, marginRight: 15 }}>
            <MaterialIcons name="menu" size={30} color="white" />
          </View>
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: favoriteMeals.length ? "center" : "flex-start",
        flex: 1,
      }}
    >
      {!favoriteMeals.length && (
        <View style={{ marginTop: 20 }}>
          <Text>You haven't selected your favourite meals yet</Text>
        </View>
      )}
      <FlatList
        data={favoriteMeals}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <MealCard
            item={item.item}
            navFunction={() => {
              navigation.navigate("mealDetailScreen", { meal: item.item });
            }}
          />
        )}
        style={{
          width: "100%",
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      />
      {/* <Button
        title="Go to Meal Detail Page"
        onPress={() => {
          navigation.navigate("mealDetailScreen");
        }}
      /> */}
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({});
