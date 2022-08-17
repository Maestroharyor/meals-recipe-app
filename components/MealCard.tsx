import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import React from "react";
import { MealsDataType } from "../data/dataTypes";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

type Props = {
  item: MealsDataType;
  navFunction: () => void;
};

const MealCard = ({ item, navFunction }: Props) => {
  let TouchableComp: any = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }
  return (
    <TouchableComp
      onPress={() => {
        navFunction();
      }}
    >
      <Card style={{ width: "100%", marginBottom: 30 }}>
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
    </TouchableComp>
  );
};

export default MealCard;

const styles = StyleSheet.create({});
