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
        if((!localStorage.getItem('token')) && (!localStorage.getItem('isAdmin'))){
            history.push('/admin');
        }
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

    function dateHandler(date){
        const dia = date.getDate();
        let mes = date.getMonth();
        const ano = date.getFullYear();
        
        switch(mes){
            case 0:
                mes = 'Janeiro';
                break;
            case 1:
                mes = 'Fevereiro';
                break;
            case 2:
                mes = 'Março';
                break;
            case 3:
                mes = 'Abril';
                break;
            case 4:
                mes = 'Maio';
                break;
            case 5:
                mes = 'Junho';
                break;
            case 6:
                mes = 'Julho';
                break;
            case 7:
                mes = 'Agosto';
                break;
            case 8:
                mes = 'Setembro';
                break;
            case 9:
                mes = 'Outubro';
                break;
            case 10:
                mes = 'Novembro';
                break;
            case 11:
                mes = 'Dezembro';
                break;
        }

        return (dia + ' de ' + mes + ' de ' + ano);
    }

    function handleOnClickVoltar(event){
        event.preventDefault();

        history.push('/dashboard/admin');
    }

    return(
        <div className="dados-aluno">
            <button className="return-button" onClick={handleOnClickVoltar}>Voltar</button>
            <div className="header">
                <p>Nome do(a) aluno(a): <strong>{nomeAluno}</strong></p>
                <p>Dia de Matrícula: <strong>{dateHandler(new Date(diaDeMatricula))}</strong></p>
            </div>
            {cardMoto(fazMoto)}
            {cardCarro(fazCarro)}
            
        </div>
    )
    
}

export default DadosAluno;