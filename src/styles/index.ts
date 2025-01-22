import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";


const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        list-style: none;
    }
`
export const Conteiner = styled.div`
    display: grid;
    grid-template-columns: 282px auto ;

`
export const MainContainer = styled.main`
    padding: 16px 120px;
    height: 100vh;
    overflow-y: scroll; 
    min-width: 520px;
    /* scrol de conteiner */
`
export const Campo = styled.input`
    padding: 8px;
    background-color: #fff;
    border-radius: 8px;
    font-weight: bold;
    color: #666666;
    border-color: #666666;
    width: 100%;
`

export const BotaoEditar = styled.button`
    font-size: 12px;
    font-weight: bold;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    color: #fff;
    background-color: darkgray;
    border-radius: 8px;
    display: inline-block; 
    margin-right: 8px;
`

export const botaoDeletar = styled(BotaoEditar)`
    background-color: ${variaveis.vermelho};
`

export const botaoSalvar = styled(BotaoEditar)`
    background-color: ${variaveis.verde};
`
export default EstiloGlobal