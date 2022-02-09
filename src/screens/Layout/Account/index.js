import React from "react";
import { User } from "../../../components/Controllers/User";
import { Title, ScrollContainer } from "../../../themes";

export function Account() {
  return (
    <ScrollContainer>
      <Title>Conta</Title>
      <User />
    </ScrollContainer>
  )
}