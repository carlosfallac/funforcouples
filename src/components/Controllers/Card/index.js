import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { ContentModal } from '../Modal';
import {
  Container,
  Content,
  Information,
  Title,
} from "./style";

export function Card({ data, icon }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Container>
        <Content onPress={() => { setModalVisible(true) }}>
          <Information>
            <Title>{data.title}</Title>
            <FontAwesome5 name={icon} size={28} color="#FFF" />
          </Information>
        </Content>
      </Container>
      <ContentModal data={data} modalOpen={modalVisible} modalClose={setModalVisible} />
    </>
  );
}