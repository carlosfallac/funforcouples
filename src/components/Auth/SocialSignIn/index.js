import React from "react";
import { Alert, View } from "react-native";
import { SocialButton } from "../../Controllers/SocialButton";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export function SocialSignIn() {
  const googleButtonPress = async () => {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
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
