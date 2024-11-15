import React from 'react'
import {
    Container,
    Tittle,
    Info
} from './styled';
import { MdMessage } from 'react-icons/md';

const Default = () => {
  return (
    <Container>
        <MdMessage />
        <Tittle>Chat App</Tittle>
        <Info>Agora você pode enviar e receber mensagem sem precisar manter seu celular conectado à internet</Info>
    </Container>
  )
}

export default Default;