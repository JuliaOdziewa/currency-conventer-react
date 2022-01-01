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
    padding: 10px 5px;
`;

export const Label = styled.label`
    color: rgba(156, 33, 74, 0.973);
    padding: 10px;
`;

export const Button = styled.button`
    border: none;
    background-color: rgba(156, 33, 74, 0.973);
    color: white;
    width: 100%;
    padding: 5px;

    &:hover {
        background-color: rgba(177, 37, 84, 0.973);
    }

    &:active {
    background-color: rgba(198, 42, 94, 0.973);
    }
`;