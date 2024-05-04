const DishesModel = require("../models/dishes");
const getProducts = (req,res) => {
    const dishes = DishesModel.find()
      .then((items) => {
        console.log(items);
        return res.send(items);
      })
      .catch(() => {
        return res.send([]);
      })
}
module.exports = {getProducts};