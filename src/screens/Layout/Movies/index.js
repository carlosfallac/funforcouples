import React from "react";
import { List } from "../../../components/Controllers/List";
import { ScrollContainer, Title } from "../../../themes"

export function Movies() {
  return (
    <ScrollContainer>
      <Title>Filmes</Title>
      <List collection="movies" icon="play-circle"/>
    </ScrollContainer>
  )
}