import React from "react";
import { Container, Title } from "../../../themes";
import { FormSignUp } from "../../../components/Auth/FormSignUp";

export function SignUp() {
  return (
    <Container>
      <Title>Cadastre-se</Title>
      <FormSignUp />
    </Container>
  )
}