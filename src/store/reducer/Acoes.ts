import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

interface ContatoSlice {
    itens: Contato[];
}

// Declarando o slice do Redux
const ContatoSlice = createSlice({
    name: 'contato',
    // Inicializando o estado com um array de contatos
    initialState: {
        itens: [
            new Contato(1, 'Amanda', 'amanda@email.com', 21964646464),
            new Contato(2, 'pedro', 'pedro@email.com', 21964646464),
            new Contato(3, 'joap', 'joap@email.com', 21964646464),
            new Contato(4, 'andre', 'andre@email.com', 21964646464),
            new Contato(5, 'carlos', 'carlos@email.com', 21964646464),
            new Contato(6, 'maria', 'maria@email.com', 21964646464),
        ],
    },
    reducers: {
        // Ação para remover um contato baseado no ID
        remover: (state, action: PayloadAction<number>) => {
            // Filtrando os contatos, removendo aquele que tem o ID igual ao passado na ação
            state.itens = state.itens.filter(contato => contato.id !== action.payload);
        },
        // Ação para cadastrar um novo contato
        cadastrar: (state, action: PayloadAction<Contato>) => {
            // Verifica se o contato com o mesmo nome já existe
            const ContatoJaExiste = state.itens.find(
                (contato) =>
                    contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
            );
            
            // Se não existir, adiciona o novo contato
            if (ContatoJaExiste) {
                alert("Ja existe um contato com o mesmo nome")
            }else {
                state.itens.push(action.payload);
            }
        }
    },
});

// Exportando as ações
export const { remover, cadastrar } = ContatoSlice.actions;

// Exportando o reducer
export default ContatoSlice.reducer;
