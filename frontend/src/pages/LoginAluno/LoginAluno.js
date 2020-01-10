import React, {useState} from 'react';
import './LoginAluno.css';
import api from '../../services/api';

function LoginAluno(props){

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        
        let response = await api.post('/users/login', {
            cpf: cpf,
            senha: senha
        });

        
        if(response.status === 200){
            
            localStorage.setItem('token', response.data.token);
            let userData = await api.get('/users/'+cpf,{
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            console.log('aqui');
            console.log(userData);
            localStorage.setItem('userName', userData.data.nome);
            localStorage.setItem('carro', userData.data.carro);
            localStorage.setItem('moto', userData.data.moto);
            localStorage.setItem('cpf', userData.data.cpf);
            
            props.history.push('/dashboard/aluno');
        }
    }

    return(
        <>
            <div className="login-box">
                <p>Login - Aluno</p>
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

export default LoginAluno;
