# driving-school-app

A simplified driving school app using React on the frontend and Nodejs, Express and MongoDB on the backend.


## Usage ##
* Create an Admin User directly in MongoDB database (this feature will be implement in next version of the application 😊). The schema of the User Model is:
```javascript
{
    nome: String,
    diaDeMatricula: Date,
    admin: true,
    cpf: String,
    senha: String,
    moto: Boolean,
    carro: Boolean,
    _id: Schema.Types.ObjectId
}
```
* Create a “.env” file in /backend directory, following the structure of “.env.default” file
* In a terminal, use “npm start” (for both /backend and /frontend directories)

## App views ##

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
