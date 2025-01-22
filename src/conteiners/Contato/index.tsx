import { useSelector } from "react-redux"
import CardContato from "../CardContato"
import { MainContainer } from "../../styles"
import { RootReducer } from "../../store"

const Contato = () =>{

    const {itens} = useSelector((state: RootReducer) => state.contato)
    const {termo} = useSelector((state: RootReducer) => state.filtro)

    const filtrarTarefas = () => {
        return (
            itens.filter((item) => item.nome.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0)
        )
    }
    return(
        <MainContainer>
        <ul>
            {filtrarTarefas().map((P) => (<li key={P.id}>
                <CardContato 
                    id ={P.id}
                    nome={P.nome}
                    email={P.email}
                    numero={P.numero} />
                </li>
            ))}
        </ul>
    </MainContainer>
    )
}
export default Contato