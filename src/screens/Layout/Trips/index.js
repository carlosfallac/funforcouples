import React from "react";
import { List } from "../../../components/Controllers/List";
import { Admob } from "../../../components/Controllers/Ads/Admob"
import { ScrollContainer, Title } from "../../../themes";

export function Trips() {
  return (
    <ScrollContainer>
      <Admob />
      <Title>Viagens</Title>
      <List collection="trips" icon="map-marked-alt" />
    </ScrollContainer>
  )
}