import React, {useState, useEffect} from 'react';
import './DadosAluno.css';
import CardAula from '../../DashboardAluno/CardAula/CardAula';
import api from '../../../services/api';

function DadosAluno(props){

    useEffect(()=>{
        localStorage.removeItem('nomeAluno');
        localStorage.removeItem('diaDeMatricula');
        localStorage.removeItem('moto');
        localStorage.removeItem('carro');
        localStorage.removeItem('cpf');
    },[])

    let fazMoto;
    let fazCarro;
    const nomeAluno = localStorage.getItem('nomeAluno');
    const diaDeMatricula = localStorage.getItem('diaDeMatricula');

    if(localStorage.getItem('moto') === 'true'){
        fazMoto = true;
    }
    else{
        fazMoto = false;
    }

    if(localStorage.getItem('carro') === 'true'){
        fazCarro = true;
    }
    else{
        fazCarro = false;
    }


    let cardMoto = (fazMoto) => {
        if(fazMoto){
            return (
            <>
                <CardAula categoria="M" cpf={localStorage.getItem('cpf')}/>
                <button>+</button>
            </>
            )
        }
    }
    let cardCarro = (fazCarro) => {
        if(fazCarro){
            return (
                <>
                <CardAula categoria="C" cpf={localStorage.getItem('cpf')}/>
                <button>+</button>
            </>
            )
        }
    }

    return(
        <>
            <p>Nome do(a) aluno(a): {nomeAluno}</p>
            <p>Dia de Matrícula: {diaDeMatricula}</p>
            {cardMoto(fazMoto)}
            {cardCarro(fazCarro)}
        </>
    )
    
}

export default DadosAluno;