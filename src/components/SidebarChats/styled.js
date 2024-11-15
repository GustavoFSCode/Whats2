import styled from 'styled-components';

export const Container = styled.div`
    height: calc(100vh - 70px);
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 6px;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 10px;
    }
`;

export const Content = styled.div`

`;

export const Divider = styled.div`
    margin: 0 10px;
    border-top: solid 1px #ddd;
`;