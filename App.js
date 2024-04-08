import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Boton from "./components/boton";
import HomeS from "./screens/stack/Home";

import ScreenTwoT from "./screens/tab/ScreenTwo";
import ScrHome from "./screens/ScrHome.js";
import ScrCourses from "./screens/ScrCourses.js";

import { useState } from "react";

export default function App() {
  //EJEMPLO USANDO NAVEGACIÓN BOTTOM TABS

  const Tab = createBottomTabNavigator();

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={ScrHome} />
          <Tab.Screen name="ScrCourses" component={ScrCourses} />
          <Tab.Screen name="ScreenTwo" component={ScreenTwoT} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );

}
