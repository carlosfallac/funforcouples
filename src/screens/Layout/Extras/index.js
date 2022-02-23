import React from "react";
import { List } from "../../../components/Controllers/List";
import { ScrollContainer, Title } from "../../../themes"

export function Extras() {
  return (
    <ScrollContainer>
      <Title>Extras</Title>
      <List collection="extras" icon="tram"/>
    </ScrollContainer>
  )
}