import React from "react";
import { View, Text } from "react-native";
import { Button, TextButton } from "../../../themes";
import auth from "@react-native-firebase/auth";

export function Account() {

  const logout = () => {
    auth()
      .signOut()
  }

  return (
    <View>
      <Text>Account</Text>
      <Button onPress={logout}>
        <TextButton>Logout</TextButton>
      </Button>
    </View>
  )
}