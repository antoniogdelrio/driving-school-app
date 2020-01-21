# driving-school-app

A simplified driving school app using React on the frontend and Nodejs, Express and MongoDB on the backend.


## Usage ##
* Create an Admin User directly in MongoDB database (this feature will be implement in next version of the application 😊). The schema of the User Model is:
```javascript
{
    nome: String,
    diaDeMatricula: Date,
    admin: __true__,
    cpf: String,
    senha: String,
    moto: Boolean,
    carro: Boolean,
    _id: Schema.Types.ObjectId
}
```
* Create a “.env” file in /backend directory, following the structure of “.env.default”
* In a terminal, use “npm start” (for both /backend and /frontend directories

## App views ##

![Login Aluno](app-views/1-login-aluno.jpg)

![Login Admin](app-views/2-login-admin.jpg)

![Login Admin fill](app-views/3-login-admin-fill.jpg)

![Dashboard Admin](app-views/4-dashboard-admin.jpg)

![Dashboard Admin Dados](app-views/5-dashboard-admin-dados.jpg)

![Cadastro Aula](app-views/6-cadastro-aula.jpg)

![Cadastro Aula success](app-views/7-cadastro-aula-success.jpg)

![Cadastro Aluno](app-views/8-cadastro-aluno.jpg)

![Dashboard Aluno](app-views/9-dashboard-aluno.jpg)