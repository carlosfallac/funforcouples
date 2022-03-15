import React from 'react';
import Modal from "react-native-modal";
import { ModalContainer, Title, Description, Button, ModalScrollerView } from './style';

export function ContentModal({ data, modalOpen, modalClose }) {
  return (
    <Modal
      isVisible={modalOpen}
      hasBackdrop={false}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
    >
      <ModalContainer>
        <Title>{data.title}</Title>
        <ModalScrollerView>
          <Description>{data.description}</Description>
        </ModalScrollerView>
        <Button onPress={() => { modalClose(false) }}>
          <Title>Fechar</Title>
        </Button>
      </ModalContainer>
    </Modal>
  )
}