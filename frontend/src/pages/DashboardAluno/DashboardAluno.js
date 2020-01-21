import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './DashboardAluno.css';
import CardAula from './CardAula/CardAula';

let stringToBoolean = function(str){
    if(str === 'true'){
        return true;
    }
    else{
        return false;
    }
}

function DashboardAluno(){
    const history = useHistory();

    let fazMoto = localStorage.getItem('moto');
    let fazCarro = localStorage.getItem('carro');
    const nome = localStorage.getItem('userName');
    const cpf = localStorage.getItem('cpf');
    fazMoto = stringToBoolean(fazMoto);
    fazCarro = stringToBoolean(fazCarro);

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            history.push('/');
        }
    },[])
    
    let cardMoto = (fazMoto) => {
        if(fazMoto){
            return (<CardAula categoria="M" cpf={cpf}/>)
        }
    }
    let cardCarro = (fazCarro) => {
        if(fazCarro){
            return (<CardAula categoria="C" cpf={cpf} />)
        }
    }

    function handleOnClickSair(event){
        event.preventDefault();

        localStorage.removeItem('cpf');
        localStorage.removeItem('carro');
        localStorage.removeItem('moto');
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        
        history.push('/');
    }

    return(
        <div className="DashboardAluno">
            <div className="dashboard-header">
                <button onClick={handleOnClickSair}>Sair</button>
                <p className="welcome-message">Bem vindo(a), <strong>{nome}</strong>!</p>
                <p>Verifique abaixo os dias e horários das suas aulas: </p>
            </div>
            {cardMoto(fazMoto)}
            {cardCarro(fazCarro)}
        </div>
    )
}

export default DashboardAluno;