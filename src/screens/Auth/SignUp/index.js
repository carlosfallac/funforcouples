import React from "react";
import { Container, Title } from "../../../themes";
import { FormSignUp } from "../../../components/Forms/FormSignUp";

export function SignUp() {
  return (
    <Container>
      <Title>Cadastre-se</Title>
      <FormSignUp />
    </Container>
  )
}