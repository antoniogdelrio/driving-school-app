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
