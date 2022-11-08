const meals = (req, res) => {
    res.render('index', {title: 'Meals'});
};
module.exports = {
    meals
};