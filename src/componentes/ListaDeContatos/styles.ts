import styled from "styled-components";

import {Props} from './index'

export const card = styled.div<Props>`
    padding: 8px;
    border-radius: 8px;
    background-color:${props => props.ativo ? '#fff' :' #fcfcfc' }; 
    color: ${props => props.ativo ? '#1E90ff' :' #5e5e5e' };
    font-weight: bold;
    border: 1px solid ${props => props.ativo ? '#1E90ff' :' #a1a1a1' } ;
    height: 32px;
`
export const cotato = styled.li`

`

export const listagem = styled.ul`

`

