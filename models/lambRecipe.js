const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LambRecipe = new Schema(
    {
        dish_name: {type: String, required: true},
        ingredients: {type: String, required: true},
        dish_pic: {type: String, required: true},
        country_id: {type: Schema.Types.ObjectId, ref:"countries"},
    },
    {timestamps: true}
)

module.exports = mongoose.model("lamb recipes", LambRecipe);