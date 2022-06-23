const controller = require('../controllers/recipe.controller');
const {authJwt} = require("../middleware");

module.exports = function (app){
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/recipe/add",[authJwt.verifyToken], controller.addRecipe);
    app.get("/api/recipe/all", controller.findAll);
    app.post("/api/recipe/getRecipe", controller.getRecipe);
    app.post("/api/recipe/customFiltering", controller.customFiltering);
}