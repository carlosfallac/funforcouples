import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, DisableButton, TextButton, Input } from "../../../themes";
import {
  Container,
  TextLink,
  TextRegister
} from "./style";
import auth from '@react-native-firebase/auth';

export function FormSignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigation()

  const registerFirebase = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => Alert.alert("Conta", "Cadastro realizado com sucesso!"))
      .catch(() => Alert.alert("Conta", "Erro ao realizar cadastro. Verifique se o e-mail está correto e/ou se sua senha possui 6 dígitos ou mais!"))
  }

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: 'SignIn' }]
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
      <TextRegister>Já tem conta?
        <TextLink
          onPress={handleMessageButtonClick}
        >
          Fazer login
        </TextLink>
      </TextRegister>
    </Container>
  );
}