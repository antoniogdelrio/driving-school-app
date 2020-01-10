const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nome: String,
    diaDeMatricula: Date,
    admin: Boolean,
    cpf: String,
    senha: String,
    moto: Boolean,
    carro: Boolean,
    _id: Schema.Types.ObjectId
})

module.exports = mongoose.model('User', userSchema);