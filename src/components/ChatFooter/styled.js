import styled from "styled-components";

export const Container = styled.div`
    height: 62px;
    bottom: 0;
    width: 100%;
    background-color: #f0f2f5;
    padding: 10px 20px;
    display: flex;
    box-shadow: 0 1px 2px #0003;

    svg {
        width: 25px;
        height: 25px;
        color: #54656f;
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
`;

export const Input = styled.input`
    padding: 10px;
    border: none;
    border-radius: 20px;
    width: 100%;
    outline: none;
    box-shadow: inset 0 0 1px 1px #0003;
`;