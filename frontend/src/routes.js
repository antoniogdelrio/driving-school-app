import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import LoginAluno from "./pages/LoginAluno/LoginAluno";
import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";
import DashboardAluno from "./pages/DashboardAluno/DashboardAluno";
import DashboardAdmin from "./pages/DashboardAdmin/DashboardAdmin";
import CadastroAluno from "./pages/CadastroAluno/CadastroAluno"
import CadastroAula from "./pages/CadastroAula/CadastroAula";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoginAluno} />
                <Route path="/admin" component={LoginAdmin} />
                <Route path='/dashboard/aluno' component={DashboardAluno}/>
                <Route path="/dashboard/admin" component={DashboardAdmin} />
                <Route path="/cadastro/aluno" component={CadastroAluno} />
                <Route path="/cadastro/aula" component={CadastroAula} />
                <Route render={() => <h1>Page not found</h1>} />} />
            </Switch>
        </BrowserRouter>
    )
}