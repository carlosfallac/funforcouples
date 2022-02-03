import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { LayoutRoutes } from "./layout.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      {user ? <LayoutRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
