import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { Button, DisableButton, TextButton, Input } from "../../../themes";
import {
  Container, ContainerFooter, TextLink,
} from "./style";
import { SocialSignUp } from "../SocialSignUp";
import auth from '@react-native-firebase/auth';

export function FormSignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigation();
  const registerFirebase = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => Alert.alert("Conta", "Cadastro realizado com sucesso!"))
      .catch(() => Alert.alert("Conta", "Erro ao realizar cadastro. Verifique se o e-mail está correto e/ou se sua senha possui 6 dígitos ou mais!"))
  }
  const handleForgotPassword = () => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => Alert.alert("Redefinir senha", "Enviamos um e-mail para você!"))
      .catch(() => Alert.alert("Redefinir senha", "E-mail não encontrado!"));
  }
  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: "SignIn" }]
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
      {email === "" || password === ""
        ?
        <DisableButton
          disabled={true}
        >
          <TextButton>Cadastrar</TextButton>
        </DisableButton>
        :
        <Button
          onPress={registerFirebase}
        >
          <TextButton>Cadastrar</TextButton>
        </Button>
      }
      <SocialSignUp />
      <ContainerFooter>
        <TextLink onPress={handleMessageButtonClick}>Login</TextLink>
        {email === "" ? null : <TextLink onPress={handleForgotPassword}>Redefinir Senha</TextLink>}
      </ContainerFooter>
    </Container>
  );
}
