import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomTabBar } from "../components/tabbar";

import { HomeScreen } from "../screens/home";
import { RootStackParamList, RootTabParamList } from "../types";

export default function Navigation() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Search" component={HomeScreen} />
      <BottomTab.Screen name="My Stuff" component={HomeScreen} />
      <BottomTab.Screen name="Downloads" component={HomeScreen} />
    </BottomTab.Navigator>
  );
}
