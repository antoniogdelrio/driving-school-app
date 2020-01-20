import React, {useState} from 'react';
import './LoginAdmin.css';
import api from '../../services/api';

function LoginAdmin(props){
    
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        
        let response = await api.post('/users/login/admin', {
            cpf: cpf,
            senha: senha
        });

        
        if(response.status === 200){
            localStorage.setItem('token', response.data.token);
            props.history.push('/dashboard/admin');
        }
    }

    return(
        <>
            <div className="login-box">
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