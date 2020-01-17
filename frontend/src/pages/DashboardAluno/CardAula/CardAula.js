import React, {useEffect, useState} from 'react';
import './CardAula.css';
import api from '../../../services/api'
import axios from 'axios';

function CardAula(props){

    
    const [aulas, setAulas] = useState({});
    const [elementos, setElementos] = useState([]);

    const categoria = props.categoria;
    const cpf = props.cpf;
    
    useEffect(async function(){
                
                const response = await api.get('/aulas/' + cpf + '/' + categoria, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    },
                });
                console.log('responsee', response.data);

                setAulas(response.data)

    }, []);

    useEffect(()=>{
        const printInfo = function(element){
            element = Object(element);
            return(
                <div className="card-aula">
                    <p>{element.dia}</p>
                    <p>
                        Das <strong>{element.horarioDeInicio} </strong> 
                        às <strong>{element.horarioDeTermino}</strong>
                    </p>
                </div>
            )
        }

        let arrayDeElmentos = [];
        console.log('aulas', aulas)
        for(let i=0; i<aulas.length; i++){
            arrayDeElmentos.push(printInfo(Object(aulas[i])));
        }
        setElementos(arrayDeElmentos);
    }, [aulas])

    const defineLabel = function(cat){
        if(cat === 'M'){
            return 'Moto';
        }
        else if(cat === 'C'){
            return 'Carro';
        }
    }

    return(
        <div className="card-categoria">
            <p className="categoria-aula"><strong>{defineLabel(categoria)}</strong></p>
            <div className="container-aulas">
                {elementos}
            </div>
        </div>
    )
}

export default CardAula;