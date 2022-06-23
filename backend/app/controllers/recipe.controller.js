const db = require("../models");
const Recipe = db.recipe;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

exports.addRecipe = (req, res) => {
    Recipe.create({
        name: req.body.name,
        typeRecipe: req.body.typeRecipe,
        difficulty: req.body.difficulty,
        ingredients: req.body.ingredients,
        timeCook: req.body.timeCook,
        description: req.body.description,
        image: req.body.image,
        author: req.body.author
    }).then(recipe => {
        res.status(200).send({message: "Dodano pomyślnie"})
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}

exports.findAll = (req, res) => {
    Recipe.findAll().then(recipe => {
        res.status(200).send({data: recipe});
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}

exports.getRecipe = (req, res) => {
    Recipe.findOne({
        where: {
            id: req.body.id
        }
    }).then(recipe => {
        res.status(200).send({data: recipe});
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}

exports.customFiltering = (req, res) => {
    // const { search } = req.body.author;
    Recipe.findAll({
        where: {
            typeRecipe: req.body.typeRecipe,
            difficulty: req.body.difficulty,
            author: { [Op.substring]: req.body.author}
        }
    }).then(recipe => {
        res.status(200).send({data: recipe});
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}