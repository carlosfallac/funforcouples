import React from "react";
import { Filter } from "../Filter";
import { Container, Title, Options } from "./style";

export function Filters({ onFilter }) {
  return (
    <Container>
      <Title>Filtre pelo status do chamado</Title>
      <Options>
        <Filter
          title="Não feitos"
          backgroundColor="#901238"
          onPress={() => onFilter(false)}
        />
        <Filter
          title="Feitos com amor"
          backgroundColor="#CB902A"
          onPress={() => onFilter(true)}
        />
      </Options>
    </Container>
  );
}