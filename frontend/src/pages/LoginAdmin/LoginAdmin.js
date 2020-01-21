import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './LoginAdmin.css';
import api from '../../services/api';

function LoginAdmin(props){
    const history = useHistory();

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');

    useEffect(()=>{
        localStorage.removeItem('cpf');
        localStorage.removeItem('nome');
        localStorage.removeItem('userName');
        localStorage.removeItem('carro');
        localStorage.removeItem('moto');
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('marcarPara');
        localStorage.removeItem('nomeAluno');
        localStorage.removeItem('diaDeMatricula');
        localStorage.removeItem('token');
    }, [])

    async function handleSubmit(event){
        event.preventDefault();

        await api.post('/users/login/admin', {
            cpf: cpf,
            senha: senha
        }).then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('isAdmin', true);
            history.push('/dashboard/admin');
        }).catch(()=>{
            setMensagem('CPF ou Senha incorretos!');
        })

        /*let response = await api.post('/users/login/admin', {
            cpf: cpf,
            senha: senha
        });

        
        if(response.status === 200){
            localStorage.setItem('token', response.data.token);
            history.push('/dashboard/admin');
        }*/
    }

    function pushToAluno(event){
        event.preventDefault();

        history.push('/');
    }

    return(
        <>
            <div className="login-box">
                <button onClick={pushToAluno}>Aluno</button>
                <h3>{mensagem}</h3>
                <p>Login - Admin</p>
                <form onSubmit={handleSubmit}>
                    <label>CPF:</label>
                    <input 
                        type="text" 
                        value={cpf} 
                        onChange={event => setCpf(event.target.value)}
                    ></input>
                    <label>Senha:</label>
                    <input 
                        type="password" 
                        value={senha}
                        onChange={event => setSenha(event.target.value)}
                    ></input>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default LoginAdmin;