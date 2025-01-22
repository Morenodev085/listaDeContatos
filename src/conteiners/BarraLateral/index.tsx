import { useDispatch, useSelector } from "react-redux";
import ListaDeContatos from "../../componentes/ListaDeContatos";
import { RootReducer } from "../../store"


import * as S from './styles'
import { alteraTermo } from "../../store/reducer/filtro";
import { Campo } from "../../styles";

const BarraLateral = () => {
    
    const dispatch = useDispatch()
    const {termo} = useSelector((state: RootReducer) => state.filtro)
    
    return (
            <S.Aside>
                <div>
                    <Campo type="text" placeholder="Buscar" value={termo} onChange={
                        evento => dispatch(alteraTermo(evento.target.value))
                    }/>
                </div>
                <S.Lista>
                    <ListaDeContatos ativo/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    <ListaDeContatos/>
                    
                </S.Lista> 
                <div>
                    <S.BotaoAdicionar to="/novo">Adicionar</S.BotaoAdicionar>
                </div>
            </S.Aside>
        );
}
export default BarraLateral;
