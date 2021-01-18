'use strict';
import db from "./db.js";
import { Sequelize } from "sequelize";
import FoodModel from "./models/food.js";
import CustomerModel from "./models/customer.js";
import AdminModel from "./models/admin.js";

const Admin = AdminModel(db, Sequelize);
const Food = FoodModel(db, Sequelize);
const Customer = CustomerModel(db, Sequelize);

Admin.hasMany(Food);

const adminDetails = [
    {
        id:1,
        username:'Harvey',
        email:'harveyspector@gmail.com',
        password:"harvey",
        createdAt:new Date(),
        updatedAt:new Date()
    },
];
const customerDetails = [
    {
        username:'Donna',
        email:'donna@gmail.com',
        password:"harvey'sDonna",
        pincode:560025,
        address:"12, Manhattan",
        phoneNumber:"9867676798",
        createdAt:new Date(),
        updatedAt:new Date()
    },
];
const foodDetails = [
    {
        name:'Paratha',
        price:35,
        foodType:'Lunch',
        createdAt:new Date(),
        updatedAt:new Date(),
        adminId: 1
    },
    {
        name:'Ghee Rice',
        price:95,
        foodType:'Lunch',
        createdAt:new Date(),
        updatedAt:new Date(),
        adminId:1
    },
    {
        name:'Butter Chicken',
        price:125,
        foodType:'Lunch',
        createdAt:new Date(),
        updatedAt:new Date(),
        adminId:1
    },
    {
        name:'Jumbo Fish',
        price:380,
        foodType:'Lunch',
        createdAt:new Date(),
        updatedAt:new Date(),
        adminId: 1
    },
    {
        name:'Grilled Chicken',
        price:120,
        foodType:'Lunch',
        createdAt:new Date(),
        updatedAt:new Date(),
        adminId:1
    },
    {
        name:'Butter Naan',
        price: 40,
        foodType:'Lunch',
        createdAt:new Date(),
        updatedAt:new Date(),
        adminId:1
    },
    {
        name:'Paneer Masala',
        price:125,
        foodType:'Lunch',
        createdAt:new Date(),
        updatedAt:new Date(),
        adminId: 1
    },
    {
        name:'Lime Soda',
        price:40,
        foodType:'Snack',
        createdAt:new Date(),
        updatedAt:new Date(),
        adminId:1
    },
    {
        name:'Masala Dosa',
        price:50,
        foodType:'Breakfast',
        createdAt:new Date(),
        updatedAt:new Date(),
        adminId:1
    },
    {
        name:'Idli',
        price: 35,
        foodType:'Breakfast',
        createdAt:new Date(),
        updatedAt:new Date(),
        adminId:1
    },
    {
        name:'Vada',
        price:25,
        foodType:'Breakfast',
        createdAt:new Date(),
        updatedAt:new Date(),
        adminId: 1
    },
    {
        name:'Poha',
        price:40,
        foodType:'Breakfast',
        createdAt:new Date(),
        updatedAt:new Date(),
        adminId:1
    }
];

const seed = () => {
    return Admin.bulkCreate(adminDetails)
    .then(() => Food.bulkCreate(foodDetails))
    .then(() => Customer.bulkCreate(customerDetails))
    .catch(function(err) {
        console.log(err);
    });
}
seed()
.then(() => {
    process.exit();
})