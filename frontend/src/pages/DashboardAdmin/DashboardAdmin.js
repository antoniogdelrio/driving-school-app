import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './DashboardAdmin.css';
import api from '../../services/api';

function DashboardAdmin(props){

    const history = useHistory();

    const [cpf, setCpf] = useState('');

    useEffect(()=>{
        if((!localStorage.getItem('token')) && (!localStorage.getItem('isAdmin'))){
            history.push('/admin');
        }
    },[])

    async function handleSubmit(event){
        event.preventDefault();

        const response = await api.get('/users/' + cpf, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        });

        if(response.status === 200){
            localStorage.setItem('cpf', cpf);
            localStorage.setItem('nomeAluno', response.data.nome);
            localStorage.setItem('diaDeMatricula', response.data.diaDeMatricula);
            localStorage.setItem('moto', response.data.moto);
            localStorage.setItem('carro', response.data.carro);
            history.push('/dashboard/admin/dados');
        }
    }

    function handleOnClickCadastrar(event){
        event.preventDefault();
        history.push('/cadastro/aluno');
    }

    function handleOnClickSair(event){
        event.preventDefault();
        localStorage.removeItem('cpf');
        localStorage.removeItem('diaDeMatricula');
        localStorage.removeItem('nomeAluno');
        localStorage.removeItem('userName');
        localStorage.removeItem('carro');
        localStorage.removeItem('moto');
        localStorage.removeItem('marcarPara');
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');

        history.push('/admin');
    }

    return(
        <>
            <div className="form-admin">
                <button className="return-button" onClick={handleOnClickSair}>Sair</button>
                <form onSubmit={handleSubmit}>
                    <label>CPF do Aluno </label>
                    <input
                        type="text" 
                        value={cpf} 
                        onChange={event => setCpf(event.target.value)}
                    ></input>
                    <button className="button-submit-buscar" type="submit">Buscar</button>
                </form>
                <button onClick={handleOnClickCadastrar}>Cadastrar novo aluno</button>
            </div>
        </>
    )
    
}

export default DashboardAdmin;