const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.get_all_users = (req,res,next)=>{
    User.find()
        .exec()
        .then(users=>{
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(404).json({error: err});
        })
}

exports.post_user = (req,res,next)=>{
    const dataArray = (req.body.diaDeMatricula).split('-');
    dataArray[1] -= 1;
    console.log(dataArray);

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.senha, salt);

    const user = new User({
        nome: req.body.nome,
        diaDeMatricula: new Date(dataArray[2], dataArray[1], dataArray[0]),
        admin: req.body.admin,
        cpf: req.body.cpf,
        senha: hash,
        moto: req.body.moto,
        carro: req.body.carro,
        _id: mongoose.Types.ObjectId()
    })

    user.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(404).json({error: err});
        })
}

exports.get_one_user = (req, res, next)=>{
    const cpf = req.params.cpf;

    User.findOne({cpf: cpf})
        .exec()
        .then(user => {
            if(user){
                res.status(200).json(user);
            }
            else{
                res.status(404).json({msg: "Usuário não encontrado"})
            }
        })
        .catch(err => {
            res.status(404).json({error: err})
        })
}

exports.login = (req, res, next) => {
    const cpf = req.body.cpf;
    User.findOne({cpf: cpf})
        .exec()
        .then(user => {
            if(user === null){
                return res.status(404).json({msg: "CPF ou senha incorretos"});
            }
            if(!bcrypt.compareSync(req.body.senha, user.senha)){
                return res.status(404).json({msg: "CPF ou senha incorretos"});
            }
            const token = jwt.sign({
                cpf: user.cpf,
                senha: user.senha
            },
            'password',
            {
                expiresIn: '1h'
            })
            return res.status(200).json({
                token: token,
                message: 'Auth successful'
            })
        })
        .catch(err => {
            res.status(404).json({error: err});
        })
}

exports.login_admin = (req, res, next) => {
    const cpf = req.body.cpf;
    User.findOne({cpf: cpf})
        .exec()
        .then(user => {
            const isAdmin = user.admin;
            if(user === null){
                return res.status(404).json({msg: "CPF ou senha incorretos"});
            }
            if(!bcrypt.compareSync(req.body.senha, user.senha)){
                return res.status(404).json({msg: "CPF ou senha incorretos"});
            }
            if(!isAdmin){
                return res.status(404).json({msg: "Acesso negado"});
            }
            const token = jwt.sign({
                cpf: user.cpf,
                senha: user.senha
            },
            'password',
            {
                expiresIn: '1h'
            })
            return res.status(200).json({
                token: token,
                message: 'Auth successful'
            })
        })
        .catch(err => {
            res.status(404).json({error: err});
        })
}