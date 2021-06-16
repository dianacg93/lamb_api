const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Country = new Schema (
    {
        country_name: {type: String, required: true},
        continent: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = mongoose.model("countries", Country)