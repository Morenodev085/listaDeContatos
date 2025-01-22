import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import * as S from './styles'

import { remover } from '../../store/reducer/Acoes'
import Contato from '../../models/Contato'

type Props = Contato

const CardContato = ({ id, nome: nomeOriginal, email: emailOriginal, numero: numeroOriginal }: Props) => {
    const dispatch = useDispatch()
    const [estaEditando, setEstaEditando] = useState(false)
    const [nome, setnome] = useState(nomeOriginal)
    const [email, setemail] = useState(emailOriginal)
    const [numero, setnumero] = useState<number>(0)

    useEffect(() => {
        setnome(nomeOriginal)
        setemail(emailOriginal)
        setnumero(numeroOriginal)
    }, [nomeOriginal, emailOriginal, numeroOriginal])

    return (
        <S.Card>
            <S.Icone src="https://via.placeholder.com/300" />
            {estaEditando ? (
                <>
                    <S.Nome value={nome} onChange={(evento) => setnome(evento.target.value)} />
                    <S.Area value={email} onChange={(evento) => setemail(evento.target.value)} />
                    <S.Area value={numero} onChange={(evento) => setnumero(evento.target.value)} />
                </>
            ) : (
                <>
                    <S.Nome disabled={true}>{nome}</S.Nome>
                    <S.Area disabled={true}>{email}</S.Area>
                    <S.Area disabled={true}>{numero}</S.Area>
                </>
            )}
            <div>
                {estaEditando ? (
                    <>
                        <S.botaoSalvar>Salvar</S.botaoSalvar>
                        <S.BotaoEditar onClick={() => setEstaEditando(false)} >Cancelar</S.BotaoEditar>
                    </>
                ) : (
                    <>
                        <S.BotaoEditar onClick={() => setEstaEditando(true)}>Editar</S.BotaoEditar>
                        <S.botaoDeletar onClick={() => dispatch(remover(id))}>Deletar</S.botaoDeletar>
                    </>
                )}
            </div>
        </S.Card>
    )
}

export default CardContato
