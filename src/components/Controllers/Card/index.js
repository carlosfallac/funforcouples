import React, { useState } from 'react';
import { ContentModal } from '../Modal';
import {
  Container,
  Content,
  Information,
  Title,
} from "./style";

export function Card({ data }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Container>
        <Content onPress={() => { setModalVisible(true) }}>
          <Information>
            <Title>{data.title}</Title>
          </Information>
        </Content>
      </Container>
      <ContentModal data={data} modalOpen={modalVisible} modalClose={setModalVisible} />
    </>
  );
}