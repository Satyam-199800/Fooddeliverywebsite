const mongoose = require("mongoose");

const DishesModel = mongoose.model("fooditems", {
    name: {type:String, required: true },
    img: {type:String, required: true },
    category: {type:String, required: true },
    price: {type:Number, required: true },
    quantity: {type:Number, required: true },

});

module.exports = DishesModel;