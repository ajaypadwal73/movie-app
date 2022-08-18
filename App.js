import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieDetailScreen from "./screens/MovieDetailScreen";
import MovieListScreen from "./screens/MovieListScreen";
import { StatusBar } from "expo-status-bar";
import Entypo from "@expo/vector-icons/Entypo";
import { COLOR } from "./constants/colors";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="MovieList"
        screenOptions={{
          headerStyle: { backgroundColor: COLOR.headerBlack },
          headerTintColor: "white",
          headerRight: () => (
            <Entypo name="dots-three-vertical" size={20} color='white' />
          ),
        }}
      >
        <Stack.Screen
          name="MovieList"
          component={MovieListScreen}
          options={{ title: "Movies" }}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetailScreen}
          options={{ title: "Movie Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
