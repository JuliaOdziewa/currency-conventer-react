import styled from "styled-components";

export const Fieldset = styled.fieldset`
    flex-basis: 700px;
    margin: 20px;
    padding: 40px;
    border-color: rgba(128, 128, 128, 0.973);
    border-radius: 25px;
    background-color: rgb(223, 223, 223);
`;

export const Legend = styled.legend`
    text-align: center;
    color: white;
    background-color: rgba(156, 33, 74, 0.973);
    padding: 15px;
    border-radius: 25px;
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.color.lipstick};
    padding: 10px;
`;

export const Button = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.color.lipstick};
    color: white;
    width: 100%;
    margin-top: 10px;
    padding: 15px;
    border-radius: 25px;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const Input = styled.input`
    border: none;
    border-radius: 25px;
    padding: 10px;
`;

export const Wrapper = styled.p`
    display: grid;
    grid-template-columns: auto 1fr;
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.red};
`;

export const Failure = styled.p`
color: ${({ theme }) => theme.color.oldRose};
`;