import React from "react";
import { List } from "../../../components/Controllers/List";
import { Admob } from "../../../components/Controllers/Ads/Admob"
import { ScrollContainer, Title } from "../../../themes"

export function Movies() {
  return (
    <ScrollContainer>
      <Admob />
      <Title>Filmes</Title>
      <List collection="movies"/>
    </ScrollContainer>
  )
}