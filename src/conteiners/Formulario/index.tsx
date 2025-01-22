import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; 

import { MainContainer } from "../../styles";
import { Campo } from "../../styles";

import { Forms, BotaoSalvar } from './styles';
import { cadastrar } from "../../store/reducer/Acoes";
import Contato from "../../models/Contato";

const Formulario = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nome, setnome] = useState('');
    const [email, setemail] = useState('');
    const [tel, settel] = useState<number>(0); // Definindo o tipo do telefone como número

    const cadastrarContato = (evento: FormEvent) => {
        evento.preventDefault();

        // Gerando um ID único (número)
        const id = Date.now(); // ID gerado com base no timestamp

        // Criando um novo objeto Contato
        const novoContato = new Contato(
            id,      // Adicionando o ID gerado (número)
            nome,
            email,
            tel
        );
        dispatch(cadastrar(novoContato));
        navigate('/');
    };

    return (
        <MainContainer>
            <h2>
                Novo Contato
            </h2>
            <Forms onSubmit={cadastrarContato}>
                <Campo value={nome} onChange={(evento) => setnome(evento.target.value)} type="text" placeholder="nome" />
                <Campo value={email} onChange={(evento) => setemail(evento.target.value)} type="email" placeholder="email" />
                <Campo 
                    value={tel} 
                    onChange={(evento) => settel(parseInt(evento.target.value))} // Convertendo para número
                    type="tel" 
                    placeholder="tel" 
                />
                <BotaoSalvar>salvar</BotaoSalvar>
            </Forms>
        </MainContainer>
    );
};

export default Formulario;
