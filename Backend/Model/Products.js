

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    category: {
        type: String,
        
    },
    price: {
        type: Number,
       
    },

    quantity: {
        type: Number,
       
    },
    capacity: {
        type: Number,
       
    },

    material: {
        type: String,
       
    },
    percentage: {
        type: Number,
       
    },
    country: {
        type: String,
       
    },
    description: {
        type: String,

    },
    image: {
        type: String,
    }
  
});

const Product = mongoose.model('Inventory', productSchema);

module.exports = Product;
