# driving-school-app #

A simplified driving school app using React on the frontend and Nodejs, Express and MongoDB Atlas on the backend.


## Usage ##
* Post new users directly on route '/users' of localhost:3333. The User schema has the follow structure:
```javascript
{
    nome: String,
    diaDeMatricula: Date,
    admin: true,
    cpf: String,
    senha: String,
    moto: Boolean,
    carro: Boolean,
}
```
* Create a “.env” file in /backend directory, following the structure of “.env.default” file
* In a terminal, use “npm start” (for both /backend and /frontend directories)

## App preview ##
![](app-views/gif.gif)

## Routes Screenshots ##

Route '/'
![Login Aluno](app-views/1-login-aluno.jpg)

Route '/admin'
![Login Admin](app-views/2-login-admin.jpg)

Route '/admin' filled
![Login Admin fill](app-views/3-login-admin-fill.jpg)

Route '/dashboard/admin'
![Dashboard Admin](app-views/4-dashboard-admin.jpg)

Route '/dashboard/admin/dados'
![Dashboard Admin Dados](app-views/5-dashboard-admin-dados.jpg)

Route '/cadastro/aula'
![Cadastro Aula](app-views/6-cadastro-aula.jpg)

Route '/cadastro/aula' success
![Cadastro Aula success](app-views/7-cadastro-aula-success.jpg)

Route '/cadastro/aluno' success
![Cadastro Aluno](app-views/8-cadastro-aluno.jpg)

Route '/dashboard/aluno' success
![Dashboard Aluno](app-views/9-dashboard-aluno.jpg)
