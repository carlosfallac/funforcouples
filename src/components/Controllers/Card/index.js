import React from 'react';
import { Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  Container,
  Content,
  Information,
  Title,
} from "./style";

export function Card({ data, icon }) {
  return (
    <Container>
      <Content onPress={() => Linking.openURL(data.url)}>
        <Information>
          <Title>{data.title}</Title>
          <FontAwesome5 name={icon} size={28} color="#FFF" />
        </Information>
      </Content>
    </Container>
  );
}