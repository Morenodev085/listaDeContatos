import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Card = styled.div`
    background-color: #FCFCFC ;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25) ;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    height: 100%;
    min-height: 200px;  /* Tamanho mínimo de altura */
    max-height: 600px;  /* Tamanho máximo de altura */
    min-width: 300px;   /* Tamanho mínimo de largura */
    max-width: 700px;   /* Tamanho máximo de largura */
    width: 100%;        /* Para garantir que o Card ocupe toda a largura disponível até o limite máximo */
`

export const Icone = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: blue;
`

export const Nome = styled.textarea`
    font-weight: bold;
    font-size: 18px;
    margin: 8px;
`

export const Area = styled.textarea`
    border-radius: 8px;
    padding: 8px;
    display: block;
    margin-bottom: 8px;
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
