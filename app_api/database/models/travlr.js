const mongoose = require('mongoose');

// Define the trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true },
    name: { type: String, required: true, index: true },
    length: { type: String, required: true },
    start: { type: Date, required: true },
    resort: { type: String, required: true },
    perPerson: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});

//define meals schema
const mealSchema = new mongoose.Schema({
    type: { type: String, required: true, index: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});

const roomsSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true }
    
});

module.exports = mongoose.model("trips", tripSchema);
module.exports = mongoose.model("food", mealSchema);
module.exports = mongoose.model("beds", roomsSchema);