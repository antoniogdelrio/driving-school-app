import React from 'react';
import './App.css';
import Router from './routes'
import LeftJokerButton from '../src/components/LeftJokerButton/LeftJokerButton'
import RightJokerButton from '../src/components/RightJokerButton/RightJokerButton'

function App() {
  const defineMenu = () => {
    if(window.location.pathname === '/' || window.location.pathname === '/dashboard/aluno'){
      return("menu-reverse");
    }
    else{
      return("menu");
    }
  }

  return (
    <>
      <div className={defineMenu()}>
        <LeftJokerButton/>
        <RightJokerButton/>
      </div>  
      <div className="container">
        <Router />
      </div>
    </>
  );
}

export default App;
