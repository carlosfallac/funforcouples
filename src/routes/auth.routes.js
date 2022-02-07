import React, { useEffect} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../screens/Authentication/SignIn";
import { SignUp } from "../screens/Authentication/SignUp";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  useEffect(() => {
    // initialize the Google SDK
    GoogleSignin.configure({
      webClientId: '706148724593-e7h6bu48iqc961ptipq5l2s5db0vhe96.apps.googleusercontent.com',
    });
  }, []);
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}