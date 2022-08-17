import { StyleSheet, Text, View, Switch, Alert } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { colors } from "../styles/global";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { filterDataType, RootDrawerParamList } from "../data/dataTypes";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { setFilters } from "../store/filters/action";

type Props = {};

type filterScreenProps = DrawerScreenProps<RootDrawerParamList>;

const FilterSwitch = (props: any) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: colors.primaryColor, false: colors.accentColor }}
        thumbColor={colors.primaryColor}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FilterScreen = ({ route, navigation }: filterScreenProps) => {
  const dispatch = useDispatch();
  const filters: filterDataType = useSelector((state: any) => state.filters);

  const [isGlutenFree, setIsGlutenFree] = useState(filters.isGlutenFree);
  const [isLactoseFree, setIsLactoseFree] = useState(filters.isLactoseFree);
  const [isVegan, setIsVegan] = useState(filters.isVegan);
  const [isVegetarian, setIsVegetarian] = useState(filters.isVegetarian);

  useLayoutEffect(() => {
    console.log("Changed route");
  }, [route]);

  useLayoutEffect(() => {
    console.log("Changed navigation");
  }, [navigation]);

  useLayoutEffect(() => {
    console.log("First Render");
  }, []);

  const saveFilters = () => {
    const appliedFilters = {
      isGlutenFree,
      isLactoseFree,
      isVegan,
      isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
    Alert.alert("Filters Applied");
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={(newValue: boolean) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(newValue: boolean) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue: boolean) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(newValue: boolean) => setIsVegetarian(newValue)}
      />
      <Button
        icon="content-save-cog"
        mode="contained"
        onPress={() => {
          saveFilters();
        }}
      >
        Save Filters
      </Button>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});
