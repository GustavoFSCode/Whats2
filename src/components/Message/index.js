import React from 'react'
import {
    Container,
    Messages,
    Content,
    Line,
    MessageDate
} from './styled';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase';

const Message = ({user, message}) => {
    const [userLoggedIn] = useAuthState(auth);

  return (
    <Container>
        <Line className={userLoggedIn?.email === user ? 'me' : ''}>
            <Content>
                <Messages>{message.message}</Messages>
                <MessageDate>
                    {new Date(message.timestamp).toLocaleString()}
                </MessageDate>
            </Content>
        </Line>
    </Container>
  )
}

export default Message