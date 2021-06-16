const {Router} = require("express")
const controllers = require("../controllers")
const router = Router();

router.get("/", (req, res) => {res.send("Welcome!")})

router.get("/countries", controllers.getAllCountries);

router.get("/countries/:id", controllers.getCountryById);

router.post("/recipes/:id", controllers.createRecipe);

router.get("/recipes/:id", controllers.getAllRecipes);

router.get("/recipes/:id", controllers.getRecipeById);

router.put("/recipes/:id", controllers.updateRecipe);

router.delete("/recipes/:id", controllers.deleteRecipe);

module.exports = router;