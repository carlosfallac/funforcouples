import React from "react";
import { List } from "../../../components/Controllers/List";
import { Admob } from "../../../components/Controllers/Ads/Admob"
import { ScrollContainer, Title } from "../../../themes"

export function Extras() {
  return (
    <ScrollContainer>
      <Admob />
      <Title>Extras</Title>
      <List collection="extras" icon="tram" />
    </ScrollContainer>
  )
}