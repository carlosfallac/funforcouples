import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { Button, DisableButton, TextButton, Input } from "../../../themes";
import {
  Container, ContainerFooter, TextLink,
} from "./style";
import { SocialSignIn } from "../SocialSignIn";
import auth from "@react-native-firebase/auth";

export function FormSignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigation();
  const loginFirebase = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => Alert.alert("Conta", "Login realizado com sucesso!"))
      .catch(() => Alert.alert("Conta", "Erro ao realizar login. Verifique se seus dados estão corretos e tente novamente!"))
  }
  const handleForgotPassword = () => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => Alert.alert("Redefinir senha", "Enviamos um e-mail para você!"))
      .catch(error => console.log(error));
  }
  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: "SignUp" }]
    });
  }
  return (
    <Container>
      <Input
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        type="text"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Input
        placeholder="Digite sua senha"
        secureTextEntry={true}
        type="text"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      {
        email === "" || password === ""
          ?
          <DisableButton
            disabled={true}
          >
            <TextButton>Entrar</TextButton>
          </DisableButton>
          :
          <Button
            onPress={loginFirebase}
          >
            <TextButton>Entrar</TextButton>
          </Button>
      }
      <SocialSignIn />
      <ContainerFooter>
        <TextLink onPress={handleMessageButtonClick}>Cadastrar-se</TextLink>
        {email === "" ? null : <TextLink onPress={handleForgotPassword}>Redefinir Senha</TextLink>}
      </ContainerFooter>
    </Container>
  );
}
