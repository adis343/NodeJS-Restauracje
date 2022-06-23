module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define("recipe", {
        name: {
            type: Sequelize.STRING
        },
        typeRecipe: {
            type: Sequelize.STRING
        },
        difficulty: {
            type: Sequelize.STRING
        },
        ingredients: {
            type: Sequelize.STRING
        },
        timeCook: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING
        }
    });

    return Recipe;
};
