const rooms = (req, res) => {
    res.render('index', {title: 'Rooms'});
};
module.exports = {
    rooms
};