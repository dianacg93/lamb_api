const db = require('../db')
const Country = require("../models/Country")

db.on('error', console.error.bind(console, "MongoDB connection error: "));

const main = async () => {
    try {
        const countries = [
            {country_name: 'Greece', 
            continent: 'Europe'},
            {country_name: 'France', 
            continent: 'Europe'},
            {country_name: 'New Zealand', 
            continent: 'Oceania'},
            {country_name: 'Argentina', 
            continent: 'South America'},
            {country_name: 'Mongolia', 
            continent: 'Asia'}
        ]
        
        const countriesList = await Country.insertMany(countries);
        console.log("Created Countries: ", countriesList);
    } catch (err) {
        console.log(err)
    }

}

const run = async () => {
    await main();

    db.close();
}

run();