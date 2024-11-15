import React from 'react';
import { Container, Button } from './styled';
import { auth, provider } from '../../services/firebase';

const Login = () => {
    const handleSignin = () => {
        auth.signInWithPopup(provider).catch(alert);
    };
    return (
        <Container>
            <Button onClick={handleSignin}>Login com Google</Button>
        </Container>
    )
}

export default Login;