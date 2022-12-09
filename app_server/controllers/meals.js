const fs = require('fs');
const food = JSON.parse(fs.readFileSync('./data/food.json','utf8'));

const meals = (req, res) => {
    res.render('meals', {title: 'Meals', food});
};
module.exports = {
    meals
};