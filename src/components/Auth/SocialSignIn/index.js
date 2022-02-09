import React from "react";
import { Alert, View } from "react-native";
import { SocialButton } from "../../Controllers/SocialButton";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

export function SocialSignIn() {
  const googleButtonPress = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const facebookButtonPress = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  return (
    <View>
      <SocialButton
        buttonTitle="Entrar com Google"
        btnType="google"
        color="#FFF"
        backgroundColor="#CB902A"
        onPress={() => googleButtonPress().then(() => Alert.alert("Conta", "Login realizado com sucesso!"))}
      />
      <SocialButton
        buttonTitle="Entrar com Facebook"
        btnType="facebook"
        color="#FFF"
        backgroundColor="#CB902A"
        onPress={() => facebookButtonPress().then(() => Alert.alert("Conta", "Login realizado com sucesso!"))}
      />
    </View>
  )
}
