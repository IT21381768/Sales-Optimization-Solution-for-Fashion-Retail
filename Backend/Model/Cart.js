const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
   
    productName : {
        type:String,
        required :true
    },
    productNo : {
        type:String,
        required :true
    },
    qut : {
        type:String,
        required :true
    },
    prize : {
        type:String,
        required :true
    },
    details: {
        type:String,
        required :true
    }
    
});

module.exports = mongoose.model('Carts',cartSchema);

