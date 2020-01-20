import React, {useState, useEffect} from 'react';
import './CadastroAula.css';
import api from '../../services/api';

function CadastroAula(props){

    const cpf = localStorage.getItem('cpf');
    const categoria = localStorage.getItem('marcarPara');
    const token = localStorage.getItem('token')

    async function handleSubmit(event){
        event.preventDefault();

        const cpf = event.target.cpf.value;
        const categoria = event.target.categoria.value;
        const dia = event.target.dia.value;
        const horaInicio = event.target.horainicio.value;
        const horaTermino = event.target.horatermino.value;

        const response = await api({
            method: 'post',
            url: '/aulas',
            headers: {'Authorization': 'Bearer ' + token},
            data: {
                categoria: categoria,
                dia: dia,
                horarioDeInicio: horaInicio,
                horarioDeTermino: horaTermino,
                cpf: cpf,
            }
        })

    }

    return(
        <form class="form-aula" onSubmit={handleSubmit}>
            <h3>Cadastro de Aula</h3>
            <label>CPF do(a) aluno(a)</label>
            <input value={cpf} type="text" name="cpf"></input>
            <label>Categoria</label>
            <input value={categoria} type="text" name="categoria"></input>
            <label>Dia</label>
            <input type="text" name="dia"></input>
            <label>Horário de Início</label>
            <input type="text" name="horainicio"></input>
            <label>Horário de Término</label>
            <input type="text" name="horatermino"></input>
            <button type="submit">Enviar</button>
        </form>
    )
    
}

export default CadastroAula;