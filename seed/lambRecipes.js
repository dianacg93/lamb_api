const db = require ("../db")
const Country = require("../models/country")
const LambRecipe = require("../models/lambRecipe")

db.on("error", console.error.bind(console, "MongoDB connection error: "))

const main = async () => {
    const greekRecipes = await Country.find({country_name: "Greece"});

    const greek = [
        {
            dish_name: "Greek Lamb Rostissiere",
            ingredients: "Lamb leg, garlic, rosemary, salt, black pepper, olive oil, lemon",
            dish_pic: "https://www.compassandfork.com/wp-content/uploads/2016/03/Serving-How-to-Cook-Greek-Lamb-to-Enjoy-at-Easter.jpg",
            country_id: greekRecipes[0]._id
        },
        {
            dish_name: "Pastitsio",
            ingredients: "onion, garlic, ground lamb, crushed tomatoes, mint, sugar, ground cinammon, noodles, greek yogurt, black pepper",
            dish_pic: "https://lh6.ggpht.com/Lmz0gPZGmGJEIkt_59Aa72FRJxp7XkEHFKG7NykJHRYgwNJtPjx-0Ck-7rRhFCUVEVn3Fjv13adU9Q2CcCMnZQ=s640-c-rw-v1-e365",
            country_id: greekRecipes[0]._id
        }
    ];
    
    const frenchRecipes = await Country.find({country_name: "France"});

    const french = [
        {
            dish_name: "Night Cassoulet",
            ingredients: "lamb sausage, ham, cherry tomatoes, onions, garlic, olive oil, balsamic vinegar, thyme leaves",
            dish_pic: "https://lh3.googleusercontent.com/-CET3_hWe0A7anvJvCGcE6sHgPqHLoQiDAepnC288RmCt9HFvsV3X6600k0rJPnvcSK2r5y1YOP6h-PMZ64f=s640-c-rw-v1-e365",
            country_id: frenchRecipes[0]._id
        },
        {
            dish_name: "French Roast Lamb",
            ingredients: "lamb, butter, French mustard, rosemary, thyme, egg white, black pepper",
            dish_pic: "https://lh3.googleusercontent.com/5wGmEcuowfXbUp8hckhMVv60Pvo6vUS-tO9VHKjx6XkXDmyg2rJ2teqWRvPxgw8m1L5_ANF2rSnXIYpGrf0P=s640-c-rw-v1-e365",
            country_id: frenchRecipes[0]._id
        }
    ];
    const kiwiRecipes = await Country.find({country_name: "New Zealand"});

    const kiwi = [
        {
            dish_name: "Shanks with Red Wine Gravy",
            ingredients: "Lamb shanks, sunflower oil, onions, carrots, celery, tomato paste",
            dish_pic: "https://www.nzspringlamb.com/wp-content/uploads/2018/04/300x300_StockFood_11415880.jpg",
            country_id: kiwiRecipes[0]._id
        },
        {
            dish_name: "New Zealand Spring Lamb Ragu",
            ingredients: "olive oil, ground lamb, garlic, diced tomatoes, red wine, beef stock",
            dish_pic: "https://www.nzspringlamb.com/wp-content/uploads/2019/12/NZSL_BasicRagu_GROUND_300_300.jpg",
            country_id: kiwiRecipes[0]._id
        }
    ];
    const argentinianRecipes = await Country.find({country_name: "Argentina"});

    const argentinian = [
        {
            dish_name: "Asado Argentino",
            ingredients: "lamb, salt, ground pepper, olive oil",
            dish_pic: "https://tipsparatuviaje.com/wp-content/uploads/2019/12/asado-argentino.jpg",
            country_id: argentinianRecipes[0]._id
        },
        {
            dish_name: "Jigote Catamarqueno",
            ingredients: "lamb, eggs, potatoes, onion, salt, pepper",
            dish_pic: "https://tipsparatuviaje.com/wp-content/uploads/2019/12/jigote-catamarqueno.jpg",
            country_id: argentinianRecipes[0]._id
        }
    ];
    const mongolianRecipes = await Country.find({country_name: "Mongolia"});

    const mongolian = [
        {
            dish_name: "Mongolian Lamb",
            ingredients: "baking soda, lamb, cornflour, chinese cooking wine, soy sauce",
            dish_pic: "https://www.recipetineats.com/wp-content/uploads/2020/08/Mongolian-lamb_9.jpg",
            country_id: mongolianRecipes[0]._id
        }
    ];

    await LambRecipe.insertMany(greek);
    await LambRecipe.insertMany(french);
    await LambRecipe.insertMany(kiwi);
    await LambRecipe.insertMany(argentinian);
    await LambRecipe.insertMany(mongolian);

    console.log("Created Lamb recipes: " + greek + french + kiwi + argentinian + mongolian);
}

const run = async () => {
    await main();
    db.close();
}

run();