import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Trips } from "../screens/Layout/Trips";
import { Movies } from "../screens/Layout/Movies";
import { Extras } from "../screens/Layout/Extras";
import { Account } from "../screens/Layout/Account";
import { TabBar } from "../components/Controllers/TabBar"

const { Navigator, Screen } = createBottomTabNavigator();

export function LayoutRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBar={props => <TabBar {...props} />}>
      <Screen name="Trips" component={Trips} />
      <Screen name="Movies" component={Movies} />
      <Screen name="Extras" component={Extras} />
      <Screen name="Account" component={Account} />
    </Navigator>
  );
}