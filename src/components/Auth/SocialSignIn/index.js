import React from "react";
import { Alert, View } from "react-native";
import { SocialButton } from "../../Controllers/SocialButton";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export function SocialSignIn() {
  const googleButtonPress = async () => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
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
    </View>
  )
}
