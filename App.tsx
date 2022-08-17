import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { colors } from "./styles/global";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { RootDrawerParamList } from "./data/dataTypes";
import FilterScreen from "./screens/FilterScreen";
import { store } from "./store/store";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function App() {
  const MealsScreen = () => {
    return (
      <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
        <Stack.Screen
          name="categoriesScreen"
          component={CategoriesScreen}
          options={{
            headerTitle: "Meal Categories",
            headerStyle: {
              backgroundColor: colors.primaryColor,
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="categoriesMealsScreen"
          component={CategoryMealsScreen}
          options={{
            headerStyle: {
              backgroundColor: colors.primaryColor,
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="mealDetailScreen"
          component={MealDetailScreen}
          options={{
            headerStyle: {
              backgroundColor: colors.primaryColor,
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    );
  };
  const FavScreen = () => {
    return (
      <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
        <Stack.Screen
          name="categoriesMealsScreen"
          component={FavouritesScreen}
          options={{
            headerTitle: "Favourites Meals",
            headerStyle: {
              backgroundColor: colors.primaryColor,
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="mealDetailScreen"
          component={MealDetailScreen}
          options={{
            headerStyle: {
              backgroundColor: colors.primaryColor,
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    );
  };

  const TabScreen = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Meals"
          component={MealsScreen}
          options={{
            tabBarLabel: "All Meals",
            headerShown: false,
            tabBarIcon: (props) => (
              <Ionicons
                name="fast-food"
                size={22}
                color={props.focused ? "#fff" : colors.primaryColor}
              />
            ),
            tabBarActiveBackgroundColor: colors.accentColor,
            tabBarInactiveBackgroundColor: "#fff",
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: colors.primaryColor,
            tabBarStyle: {},
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={FavScreen}
          options={{
            tabBarLabel: "Favorites!",
            headerStyle: {
              backgroundColor: colors.primaryColor,
            },
            headerTintColor: "#fff",
            tabBarIcon: (props) => (
              <AntDesign
                name="hearto"
                size={22}
                color={props.focused ? "#fff" : colors.primaryColor}
              />
            ),
            tabBarActiveBackgroundColor: colors.accentColor,
            tabBarInactiveBackgroundColor: "#fff",
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: colors.primaryColor,
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={"#fff"} barStyle="dark-content" />
      <PaperProvider>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Meals">
            <Drawer.Screen
              name="Meals"
              component={TabScreen}
              options={{
                headerShown: false,
              }}
            />
            <Drawer.Screen
              name="Filter"
              component={FilterScreen}
              options={{
                headerTitle: "Filters",
                headerStyle: {
                  backgroundColor: colors.primaryColor,
                },
                headerTintColor: "#fff",
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
