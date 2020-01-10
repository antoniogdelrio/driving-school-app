import React from 'react';
import './RightJokerButton.css';

function RightJokerButton() {

  const pathName = window.location.pathname;
  var buttonText = '';

  if(pathName === '/'){
    buttonText = 'ADM';
  }

  if(pathName === '/admin'){
    return(
      <></>
    )
  }

  if(pathName === '/dashboard/aluno' || pathName === '/dashboard/admin' || pathName === '/cadastro/aula' || pathName === '/cadastro/aluno'){
    buttonText = 'Sair'
  }

  return (
    <button className="right-button">{buttonText}</button>
  );
}

export default RightJokerButton;