import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { LayoutRoutes } from "./layout.routes";
import { AuthRoutes } from "./auth.routes";
import auth from "@react-native-firebase/auth";

export function Routes() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser)
    return subscriber
  }, []);
  return (
    <NavigationContainer>
      {user ? <LayoutRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
