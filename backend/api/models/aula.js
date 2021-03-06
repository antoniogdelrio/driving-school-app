const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aulaSchema = new Schema({
    categoria: String,
    dia: Date,
    horarioDeInicio: String,
    horarioDeTermino: String,
    cpf: String,
    _id: Schema.Types.ObjectId
});

module.exports = mongoose.model('Aula', aulaSchema);