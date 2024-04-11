import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import screen_example from "./screens/Example.js";
import screen_home from "./screens/Home.js";
import screen_courses from "./screens/Courses.js";

import { useState } from "react";

export default function App() {
  //EJEMPLO USANDO NAVEGACIÓN BOTTOM TABS

  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

 
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Inicio" component={screen_home} />
          <Drawer.Screen name="Configuracion" component={screen_courses} />
          <Drawer.Screen name="About" component={screen_example} />
        </Drawer.Navigator>

        {/* <Tab.Navigator>
          <Tab.Screen name="Home" component={ScrHome} />
          <Tab.Screen name="ScrCourses" component={ScrCourses} />
          <Tab.Screen name="ScreenTwo" component={ScreenTwoT} />
        </Tab.Navigator> */}
      </NavigationContainer>
    </>
  );

}
