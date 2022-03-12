import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import Users from '../Constants/Users.js'
import {products} from '../Constants/Constants.js'
import Order from '../models/order.js'
import Product from '../models/product.js'
import User from '../models/user.js'
import connectDB from '../config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        // first wiping all the data
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(Users)
        const adminUser = createdUsers[0]._id
        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser}
        })
        await Product.insertMany(sampleProducts)
        console.log('Data Imported'.green.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}


const destroyData = async () => {
    try {
        // first wiping all the data
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed'.red.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

// we can run "node backend/seeder -d" to run destroyData
// [2] is the -d here
if(process.argv[2]){
    destroyData()
}else{
    importData()
}
// setting up these also in scripts in package.jason