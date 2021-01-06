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
  username: "testuser",
  password: "Testpass@12345",
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

export default db
