import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './DashboardAdmin.css';
import api from '../../services/api';

function DashboardAdmin(props){

    const history = useHistory();

    const [cpf, setCpf] = useState('');

    useEffect(()=>{
        localStorage.removeItem('nomeAluno');
        localStorage.removeItem('diaDeMatricula');
        localStorage.removeItem('moto');
        localStorage.removeItem('carro');
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

    return(
        <>
            <div className="form-admin">
                <form onSubmit={handleSubmit}>
                    <label>CPF do Aluno </label>
                    <input
                        type="text" 
                        value={cpf} 
                        onChange={event => setCpf(event.target.value)}
                    ></input>
                    <button type="submit">Buscar</button>
                </form>
            </div>
        </>
    )
    
}

export default DashboardAdmin;