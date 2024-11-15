import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    overflow-y: auto;
    background-color: #efeae2;

    &::-webkit-scrollbar {
        width: 6px;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,0.2);
        border-radius: 10px;
    }
`;

