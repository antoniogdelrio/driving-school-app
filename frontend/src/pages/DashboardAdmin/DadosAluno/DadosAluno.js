import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './DadosAluno.css';
import CardAula from '../../DashboardAluno/CardAula/CardAula';

function DadosAluno(props){

    const history = useHistory();

    const [visible, setVisible] = useState(true);

    async function handleClick(categoria){

        setVisible(false);

        if(categoria === 'M'){
            await localStorage.setItem('marcarPara', 'M');
        }
        if(categoria === 'C'){
            await localStorage.setItem('marcarPara', 'C');
        }

        history.push('/cadastro/aula');
    }

    useEffect(()=>{
        localStorage.removeItem('nomeAluno');
        localStorage.removeItem('diaDeMatricula');
        localStorage.removeItem('moto');
        localStorage.removeItem('carro');
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
                <button className="add-moto" onClick={(event) => {
                    event.preventDefault(); handleClick('M');
                }}>Adicionar aula de moto</button>
            </>
            )
        }
    }
    let cardCarro = (fazCarro) => {
        if(fazCarro){
            return (
                <>
                <CardAula categoria="C" cpf={localStorage.getItem('cpf')}/>
                <button className="add-carro" onClick={(event) => {
                    event.preventDefault(); handleClick('C');
                }}>Adicionar aula de carro</button>
            </>
            )
        }
    }

    return(
        <div className="dados-aluno">
            <div className="header">
                <p>Nome do(a) aluno(a): <strong>{nomeAluno}</strong></p>
                <p>Dia de Matrícula: <strong>{diaDeMatricula}</strong></p>
            </div>
            {cardMoto(fazMoto)}
            {cardCarro(fazCarro)}
            
        </div>
    )
    
}

export default DadosAluno;