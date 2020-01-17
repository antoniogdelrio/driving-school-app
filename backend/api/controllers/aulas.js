const mongoose = require('mongoose');
const Aula = require('../models/aula');

exports.get_all_aulas = (req, res, next) => {
    Aula.find()
        .exec()
        .then(aulas => {
            res.status(200).json(aulas);
        })
        .catch(err => {
            res.status(404).json(err);
        })
}

exports.get_category_aula = (req, res, next) => {
    const categoria = req.params.categoria;
    const cpf = req.params.cpf;

    Aula.find({categoria: categoria,
               cpf: cpf})
        .exec()
        .then(aulas => {
            res.status(200).json(aulas);
        })
        .catch(err => {
            res.status(404).json(err);
        })
}

exports.post_aula = (req, res, next) => {
    const dataArray = (req.body.dia).split('-');
    dataArray[1] -= 1;
    console.log(dataArray);

    const aula = new Aula({
        categoria: req.body.categoria,
        dia: new Date(dataArray[2], dataArray[1], dataArray[0]),
        horarioDeInicio: req.body.horarioDeInicio,
        horarioDeTermino: req.body.horarioDeTermino,
        cpf: req.body.cpf,
        _id: mongoose.Types.ObjectId()
    })

    aula.save()
        .then(aulaConsultada => {
            res.status(200).json(aulaConsultada);
        })
        .catch(err => {
            res.status(404).json({error: err});
        })
}