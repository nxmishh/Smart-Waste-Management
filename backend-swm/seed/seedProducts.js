const mongoose = require('mongoose');
const Product = require('../models/productModel');


mongoose.connect('mongodb://localhost:27017/swm')
    .then(() => {
        console.log('MongoDB Connected Succesfully')
    })
    .catch(err => {
        console.log('MongoDB Connection Failed')
        console.log(err);
    })

const seedProducts = [
    {
        name: 'Compost',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis deserunt quae atque iste omnis labore quisquam quam dignissimos tempore, veritatis illo nam sit veniam voluptas, voluptates, praesentium illum enim non?',
        price: '999',
        category: 'Product',
        images: 'product_1.png',
        stockQuantity: 500,
    },
    {
        name: 'Paper Waste (1 ton)',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis deserunt quae atque iste omnis labore quisquam quam dignissimos tempore, veritatis illo nam sit veniam voluptas, voluptates, praesentium illum enim non?',
        price: '4999',
        category: 'Waste',
        images: 'product_2.png',
        stockQuantity: 1500,
    },
    {
        name: 'Metal Scraps (1 ton)',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis deserunt quae atque iste omnis labore quisquam quam dignissimos tempore, veritatis illo nam sit veniam voluptas, voluptates, praesentium illum enim non?',
        price: '9999',
        category: 'Waste',
        images: 'product_3.png',
        stockQuantity: 1500,
    },
    {
        name: 'Broken Glass (1 ton)',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis deserunt quae atque iste omnis labore quisquam quam dignissimos tempore, veritatis illo nam sit veniam voluptas, voluptates, praesentium illum enim non?',
        price: '2999',
        category: 'Waste',
        images: 'product_4.png',
        stockQuantity: 1500,
    },
]

Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})
