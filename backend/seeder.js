'use strict';
import db from "./db";
import Food from "./models/food.js";
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert("food", [{
            name:"Paratha",
            price:"35",
            foodType:"Lunch",
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    }, 
    down: function (queryInterface, Sequelize) {
    }
}