import React from "react";
import { Container, Title } from "../../../themes";
import { FormSignIn } from "../../../components/Auth/FormSignIn";

export function SignIn() {
  return (
    <Container>
      <Title>Entrar</Title>
      <FormSignIn />
    </Container>
  );
}