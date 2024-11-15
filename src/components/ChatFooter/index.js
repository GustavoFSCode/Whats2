import React, { useState } from 'react'
import { 
  Container,
  Input,
  Form
} from './styled';
import { MdSend } from 'react-icons/md';
import { auth, db } from '../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';

const ChatFooter = ({chatId}) => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    db.collection('chats').doc(chatId).collection('messages').add({
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.email,
      photoURL: user.photoURL
    });
    setMessage('');
  };



  return (
    <Container>
      <Form onSubmit={handleSendMessage}>
        <Input
          placeholder='Mensagem'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <MdSend onClick={handleSendMessage}/>
      </Form>
    </Container>
  )
}

export default ChatFooter;