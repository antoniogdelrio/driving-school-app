import React, {useEffect, useState} from 'react';
import './CardAula.css';
import api from '../../../services/api'

function CardAula(props){
    const [aulas, setAulas] = useState({});
    const [elementos, setElementos] = useState([]);

    const categoria = props.categoria;
    const cpf = props.cpf;

    useEffect(()=>{

        let mounted = true

        const loadData = async ()=>{
            const response = await api.get('/aulas/' + cpf + '/' + categoria, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                },
            });
            if (mounted) {
                setAulas(response.data)
            }
        };
        loadData();

        return () => {
            mounted = false;
          };
    }, []) 

    useEffect(()=>{
        const printInfo = function(element){
            element = Object(element);
            const data = new Date(element.dia)
            return(
                <div className="card-aula">
                    <p>{dateHandler(data)}</p>
                    <p>
                        Das <strong>{element.horarioDeInicio} </strong> 
                        às <strong>{element.horarioDeTermino}</strong>
                    </p>
                </div>
            )
        }

        let arrayDeElmentos = [];

        for(let i=0; i<aulas.length; i++){
            arrayDeElmentos.push(printInfo(Object(aulas[i])));
        }
        setElementos(arrayDeElmentos);
    }, [aulas])

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