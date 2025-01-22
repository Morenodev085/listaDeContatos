import { Link } from "react-router-dom";
import styled from "styled-components";

export const Aside = styled.aside`
    padding: 16px;
    background-color: #fcfcfc;
    height: 100vh;
`
export const Lista = styled.div`
    display: flex; /* Se você está usando Flexbox */
    flex-direction: column;
  gap: 10px; /* Ajusta o espaço entre os cards para 10px */
    margin-top: 16px;
    overflow-y: scroll; 
    height: 80vh;
`


export const BotaoAdicionar = styled(Link)`
    padding: 8px;
    border-radius: 8px;
    font-weight: bold;
    border: solid 1px #a1a1a1;
    text-align: center;
    width: 256px;
    bottom: 10px;
    background-color:darkgray;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    position: fixed;
    bottom: 20px;
    left: 12px;
    color: #fff;
    text-decoration: none;
`

