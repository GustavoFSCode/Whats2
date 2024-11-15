import React from 'react'
import { 
  Container,
  Content,
  Divider
 } from './styled'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../../services/firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import SidebarChatsItem from '../SidebarChatsItem'

const SidebarChats = ( { setUserChat, userChat }) => {
  const [user] = useAuthState(auth);

  const refChat = db
    .collection('chats')
    .where('users', 'array-contains', user.email);
  const [chatsSnapshot] = useCollection(refChat);

  return (
    <Container>
      {chatsSnapshot?.docs.map((item, index) => (
        <Content key={index}>
        <SidebarChatsItem
          id={item.id}
          users={item.data().users}
          user={user}
          userChat={userChat}
          setUserChat={setUserChat}
          active={userChat?.chatId === item.id ? "active" : ""}
        />
        <Divider />
      </Content>
  ))}
    </Container>
  )
}

export default SidebarChats