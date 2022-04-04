import React from "react";
import { User } from "../../../components/Controllers/User";
import { Admob } from "../../../components/Controllers/Ads/Admob"
import { Title, ScrollContainer } from "../../../themes";

export function Account() {
  return (
    <ScrollContainer>
      <Admob />
      <Title>Conta</Title>
      <User />
    </ScrollContainer>
  )
}