import React, {useEffect, useState} from 'react';
import './CardAula.css';
import api from '../../../services/api'

function CardAula(props){

    const [aulas, setAulas] = useState({});

    const categoria = props.categoria;
    const cpf = localStorage.getItem('cpf');

    useEffect(async function(){
        const response = await api.get('/aulas/' + cpf + '/' + categoria, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
        setAulas(response.data);
    }, []);

    const defineLabel = function(cat){
        if(cat === 'M'){
            return 'Moto';
        }
        else if(cat === 'C'){
            return 'Carro';
        }
    }

    const printInfo = function(element){
        element = Object(element);
        return(
            <div className="card-aula">
                <p>{element.dia}</p>
                <p>{element.horario}</p>
            </div>
        )
    }
    
    let arrayDeElmentos = [];

    for(let i=0; i<aulas.length; i++){
        console.log(i);

        arrayDeElmentos.push(printInfo(Object(aulas[i])));
    }

    return(
        <div className="card-categoria">
            <p className="categoria-aula"><strong>{defineLabel(categoria)}</strong></p>
            <div className="container-aulas">
                {arrayDeElmentos}
            </div>
        </div>
    )
}

export default CardAula;