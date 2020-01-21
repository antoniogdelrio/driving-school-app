import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import './CadastroAluno.css';
import api from '../../services/api';

function CadastroAluno(props){
    const history = useHistory();

    const token = localStorage.getItem('token')

    const [mensagem, setMensagem] = useState('');

    useEffect(()=>{
        if((!localStorage.getItem('token')) && (!localStorage.getItem('isAdmin'))){
            history.push('/admin');
        }
    },[])

    async function handleSubmit(event){
        event.preventDefault();

        const cpf = event.target.cpf.value;
        const nome = event.target.nome.value;
        const senha = event.target.senha.value;
        const diaDeMatricula = event.target.diaDeMatricula.value;
        const categoria = event.target.categorias.value;

        let dados = {
            nome: nome,
            diaDeMatricula: diaDeMatricula,
            admin: false,
            cpf: cpf,
            senha: senha,
            moto: false,
            carro: false,
        }

        if(categoria === 'C'){
            dados.carro = true;
        }
        else if(categoria === 'M'){
            dados.moto = true;
        }
        else{
            dados.carro = true;
            dados.moto = true;
        }

        const response = await api({
            method: 'post',
            url: '/users',
            headers: {'Authorization': 'Bearer ' + token},
            data: dados
        })

        setMensagem('Aluno cadastrado com sucesso!');

    }

    function handleOnClickVoltar(event){
        event.preventDefault();

        history.push('/dashboard/admin')
    }

    return(
        <>
            <form class="form-aluno" onSubmit={handleSubmit}>
                <button className="return-button" onClick={handleOnClickVoltar}>Voltar</button>
                <h3>Cadastro de Aluno</h3>
                <label>CPF do(a) aluno(a)</label>
                <input type="text" name="cpf"></input>
                <label>Nome</label>
                <input type="text" name="nome"></input>
                <label>Senha</label>
                <input type="password" name="senha"></input>
                <label>Dia de Matrícula</label>
                <input type="text" name="diaDeMatricula"></input>
                <label>Categorias</label>
                <div className="radio-buttons-box">
                    <input type="radio" name="categorias" value="M"></input>Moto  
                    <input type="radio" name="categorias" value="C"></input>Carro 
                    <input type="radio" name="categorias" value="M+C"></input>Moto e Carro 
                </div>
                <button type="submit" className="submit-button">Enviar</button>
            </form>
            <h3>{mensagem}</h3>
        </>
    )
    
}

export default CadastroAluno;