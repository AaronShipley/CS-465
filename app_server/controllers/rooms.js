const fs = require('fs');
const bed = JSON.parse(fs.readFileSync('./data/beds.json','utf8'));

const rooms = (req, res) => {
    res.render('rooms', {title: 'Rooms', beds});
};
module.exports = {
    rooms
};