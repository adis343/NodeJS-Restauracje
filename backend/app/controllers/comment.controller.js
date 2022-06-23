const db = require("../models");
const Comment = db.comment;

exports.addComment = (req, res) => {
    Comment.create({
        comment: req.body.comment,
        username: req.body.username,
        idrecipe: req.body.idrecipe
    }).then(comment => {
        res.status(200).send({message: "Dodano pomyślnie"})
    }).catch(err => {
       res.status(500).send({message: err.message});
    });
}

exports.findAllByRecipe = (req, res) => {
    Comment.findAll({
        where: {
            idrecipe: req.body.idrecipe
        }
    }).then(comments => {
        res.status(200).send({data: comments})
    }).catch(err => {
        res.status(500).send({message: err.message});
    })
}

exports.delete = (req, res) => {
    Comment.destroy({
        where: {
            id: req.body.id
        }
    }).then(comment => {
        res.status(200).send({message: "Usunięto pomyślnie"})
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
}