module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
        comment: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        idrecipe: {
            type: Sequelize.INTEGER
        },
    });
    return Comment;
};