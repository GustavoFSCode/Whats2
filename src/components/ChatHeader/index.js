import React from 'react';
import { 
    Container,
    Avatar,
    Options,
    Name,
    NameContent,
    UserInfo
 } from './styled';
import { MdPerson, MdMoreVert, MdSearch } from 'react-icons/md';


const ChatHeader = ({photoURL, name}) => {
  return (
    <Container>
        <UserInfo>
            {photoURL ? <Avatar src={photoURL} /> : <MdPerson />}
            <NameContent>
                <Name>{name}</Name>
            </NameContent>
        </UserInfo>
        <Options>
            <MdSearch />
            <MdMoreVert />
        </Options>
    </Container>
  )
}

export default ChatHeader;