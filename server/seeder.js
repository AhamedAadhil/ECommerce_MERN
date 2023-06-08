import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./Data/users.js";
import products from "./Data/products.js";
import User from "./Models/user.model.js";
import Product from "./Models/product.model.js";
import Order from "./Models/order.model.js";
import connectDB from "./Config/db.js";

dotenv.config();
await connectDB();

const importData = async () => {
  try {
    //to clear all the exist data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    //insert data from exisiting data source with dummy value
    const createdUsers = await User.insertMany(users);

    //createdUsers[0]._id => bcz admin is in first in the users.js file
    const adminUser = createdUsers[0]._id;

    //to make connection between user and product use Admin user as connecting object between them
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported! ");
    process.exit();
  } catch (error) {
    console.error(`${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    //to clear all the exist data
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error.message}`);
    process.exit(1);
  }
};
// this code will work when trying to run the seeder in terminal with code "node seeder -d" or "node seeder"
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
