import { configureStore } from "@reduxjs/toolkit";

import ContatoReducer from './reducer/Acoes'
import filtroReducer from './reducer/filtro'

const store = configureStore({
    reducer: {
        contato: ContatoReducer,
        filtro: filtroReducer,
    },
});

export type RootReducer = ReturnType<typeof store.getState>

export default store