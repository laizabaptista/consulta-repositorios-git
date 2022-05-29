import styled from "styled-components";
export const HomeContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Input = styled.input`
    border: 1px solid #ddd;
    height: 2rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .2rem;

    &: focus,
    &: active{
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    height: 2rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;

    &: hover{
        background: #ff0000;
    }
    &: focus,
    &: active{
        outline: none;
        box-shadow: none;
    }
`;
export const ErrorMsg = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 0.85rem;
    margin-top: 2rem;
    color: red;
`;