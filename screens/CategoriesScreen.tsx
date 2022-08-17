import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../data/dataTypes";
import { CATEGORIES } from "../data/data";
import CategoryCard from "../components/CategoryCard";
import { MaterialIcons } from "@expo/vector-icons";

type categoriesProps = NativeStackScreenProps<
  RootStackParamList,
  "categoriesScreen"
>;

const CategoriesScreen = ({ route, navigation }: any) => {
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
    <View style={{ paddingVertical: 20 }}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={(item, index) => item.id}
        renderItem={(item) => (
          <CategoryCard
            item={item.item}
            navFunction={() => {
              navigation.navigate("categoriesMealsScreen", item.item);
            }}
          />
        )}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
