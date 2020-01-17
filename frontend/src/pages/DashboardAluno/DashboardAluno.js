import React from 'react';
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
    let fazMoto = localStorage.getItem('moto');
    let fazCarro = localStorage.getItem('carro');
    const nome = localStorage.getItem('userName');
    const cpf = localStorage.getItem('cpf');
    fazMoto = stringToBoolean(fazMoto);
    fazCarro = stringToBoolean(fazCarro);
    
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
    return(
        <div className="DashboardAluno">
            <div className="dashboard-header">
                <p className="welcome-message">Bem vindo(a), <strong>{nome}</strong>!</p>
                <p>Verifique abaixo os dias e horários das suas aulas: </p>
            </div>
            {cardMoto(fazMoto)}
            {cardCarro(fazCarro)}
        </div>
    )
}

export default DashboardAluno;