import React from "react";
import { Button, TextButton } from "../../../themes";
import auth from "@react-native-firebase/auth";
import { UserContainer, UserEmail, UserImage, UserName } from "./style";

export function User() {
  const user = auth().currentUser;
  const logout = () => {
    auth()
      .signOut()
  }
  return (
    <UserContainer>
      <UserImage source={{ uri: user.photoURL }} />
      <UserName>{user.displayName}</UserName>
      <UserEmail>{user.email}</UserEmail>
      <Button onPress={logout}>
        <TextButton>Logout</TextButton>
      </Button>
    </UserContainer>
  );
}