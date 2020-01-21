import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './LoginAluno.css';
import api from '../../services/api';

function LoginAluno(props){

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

        await api.post('/users/login', {
            cpf: cpf,
            senha: senha
        }).then(async function(response){
            localStorage.setItem('token', response.data.token);
            let userData = await api.get('/users/'+cpf,{
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            
            if(userData.data.admin){
                setMensagem('CPF ou Senha incorretos!');
            }
            else{
                localStorage.setItem('userName', userData.data.nome);
                localStorage.setItem('carro', userData.data.carro);
                localStorage.setItem('moto', userData.data.moto);
                localStorage.setItem('cpf', userData.data.cpf);

                history.push('/dashboard/aluno');
            }
            
        }).catch(() => {
            setMensagem('CPF ou Senha incorretos!')
        })
    }

    function pushToAdmin(event){
        event.preventDefault();
        history.push('/admin')
    }

    return(
        <>
            <div className="login-box">
                <button onClick={pushToAdmin}>Admin</button>
                <h3>{mensagem}</h3>
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
