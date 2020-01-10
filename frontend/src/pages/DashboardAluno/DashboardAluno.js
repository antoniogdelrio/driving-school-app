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
    
    fazMoto = stringToBoolean(fazMoto);
    fazCarro = stringToBoolean(fazCarro);
    
    let cardMoto = () => {
        if(fazMoto){
            return (<CardAula categoria="M"/>)
        }
    }
    let cardCarro = () => {
        if(fazCarro){
            return (<CardAula categoria="C"/>)
        }
    }
    return(
        <div className="DashboardAluno">
            <div className="dashboard-header">
                <p className="welcome-message">Bem vindo(a), <strong>{nome}</strong>!</p>
                <p>Verifique abaixo os dias e horários das suas aulas: </p>
            </div>
            {cardMoto()}
            {cardCarro()}
        </div>
    )
}

export default DashboardAluno;