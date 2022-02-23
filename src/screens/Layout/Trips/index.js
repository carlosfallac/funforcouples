import React from "react";
import { List } from "../../../components/Controllers/List";
import { ScrollContainer, Title } from "../../../themes"

export function Trips() {
  return (
    <ScrollContainer>
      <Title>Viagens</Title>
      <List collection="trips" icon="map-marked-alt"/>
    </ScrollContainer>
  )
}