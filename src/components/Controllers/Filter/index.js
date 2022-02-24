import React from 'react';
import { Container, Title } from './style';

export function Filter({ title, backgroundColor, ...rest }) {
  return (
    <Container backgroundColor={backgroundColor} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}