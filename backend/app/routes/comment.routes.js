const controller = require('../controllers/comment.controller');
const {authJwt} = require("../middleware");

module.exports = function (app){
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/comment/add", [authJwt.verifyToken], controller.addComment);
    app.post("/api/comment/findByRecipe", controller.findAllByRecipe);
    app.post("/api/comment/delete", [authJwt.verifyToken, authJwt.isModerator], controller.delete);
}