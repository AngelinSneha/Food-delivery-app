import { Sequelize } from "sequelize";

import AdminModel from "./models/admin.js";
import CartModel from "./models/cartItems.js";
import CustomerModel from "./models/customer.js";
import DeliveryModel from "./models/delivery.js";
import FoodModel from "./models/food.js";
import OrderModel from "./models/order.js";

const db = new Sequelize({
  dialect: "mysql",
  database: "testDB",
  username: "root",
  password: "",
  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const Admin = AdminModel(db, Sequelize);
const CartItem = CartModel(db, Sequelize);
const Customer = CustomerModel(db, Sequelize);
const Delivery = DeliveryModel(db, Sequelize);
const Food = FoodModel(db, Sequelize);
const Order = OrderModel(db, Sequelize);


Admin.hasMany(Food)
Food.belongsToMany(CartItem,{through : 'Food_added_to'});
CartItem.belongsToMany(Order,{through : 'Cart_has'});
Customer.belongsToMany(Order,{through : 'Order_by'});
Order.belongsToMany(Delivery,{through : 'Deliver_to'})

export default db
