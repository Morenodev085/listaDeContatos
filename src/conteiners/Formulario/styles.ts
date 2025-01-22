import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { BotaoEditar } from "../../styles";

export const Forms = styled.form`
    max-width: 547px;
    width: 100%;
    input{
        margin: 8px;
    }
`;


    export const BotaoSalvar = styled(BotaoEditar)`
    background-color: ${variaveis.verde};
    `