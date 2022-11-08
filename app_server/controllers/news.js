const news = (req, res) => {
    res.render('index', {title: 'News'});
};
module.exports = {
    news
};