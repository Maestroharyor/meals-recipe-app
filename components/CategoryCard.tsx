import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";
import { CategoryDataType } from "../data/dataTypes";

type Props = {
  item: CategoryDataType;
  navFunction: () => void;
};

const CategoryCard = ({ item, navFunction }: Props) => {
  let TouchableComp: any = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableComp
        onPress={() => {
          navFunction();
        }}
        style={{ flex: 1 }}
      >
        <View
          style={{
            ...styles.container,
            ...{ backgroundColor: item.color, elevation: 3 },
          }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </TouchableComp>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "right",
  },
});
