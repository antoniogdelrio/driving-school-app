import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './CadastroAluno.css';
import api from '../../services/api';

function CadastroAluno(props){

    const token = localStorage.getItem('token')

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

    }

    return(
        <form class="form-aluno" onSubmit={handleSubmit}>
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
            <button type="submit">Enviar</button>
        </form>
    )
    
}

export default CadastroAluno;