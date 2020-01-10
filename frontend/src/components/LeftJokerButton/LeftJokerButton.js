import React from 'react';
import './LeftJokerButton.css';

function LeftJokerButton() {
  const pathName = window.location.pathname;
  var buttonText = '';

  if(pathName === '/' || pathName === '/dashboard/aluno'){
    return(
      <button class="left-button" style={{display: "none"}}>{buttonText}</button>
    )
  }

  if(pathName === '/dashboard/admin'){
    buttonText = 'Cadastrar novo aluno';
  }

  if(pathName === '/admin'  || pathName === '/cadastro/aula' || pathName === '/cadastro/aluno'){
    buttonText = 'Voltar'
  }
  return (
    <button class="left-button">{buttonText}</button>
  );
}

export default LeftJokerButton;