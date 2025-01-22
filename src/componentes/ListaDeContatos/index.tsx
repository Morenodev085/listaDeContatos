import * as s from './styles'



export type Props = {
    ativo?: boolean
}
const ListaDeContatos = (props: Props) => (
    <s.card ativo ={props.ativo}>
        <s.listagem >
            <s.cotato>Contato 1</s.cotato>
        </s.listagem>
    </s.card>
)

export default ListaDeContatos