import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, DisableButton, TextButton, Input } from "../../../themes";
import {
  Container,
  TextLink,
  TextRegistration
} from "./style";
import auth from "@react-native-firebase/auth";

export function FormSignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigation()

  const loginFirebase = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => Alert.alert("Conta", "Login realizado com sucesso!"))
      .catch(() => Alert.alert("Conta", "Erro ao realizar login. Verifique se seus dados estão corretos e tente novamente!"))
  }

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: 'SignUp' }]
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
      <TextRegistration>Não tem conta?
        <TextLink
          onPress={handleMessageButtonClick}
        >
          Registre-se
        </TextLink>
      </TextRegistration>
    </Container>
  )
}