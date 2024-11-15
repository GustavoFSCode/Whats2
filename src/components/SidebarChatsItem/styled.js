import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: start;
    padding: 15px 20px;

    &:hover{
        background-color: #f0f2f5;
    }

    svg {
        width: 30px;
        height: 30px;
        color: #ccc;
        border-radius: 50%;
        margin-right: 10px;
        min-width: fit-content;
    }

    &.active {
        background-color: #f0f2f5;
    }
`;

export const Name = styled.span`
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
`;