const mongoose = require('mongoose');
const User = require('../models/userModel')

const OrderSchema = new mongoose.Schema({
    productDetails: {
        type: Array,
        default:[]
    },
    email:{
        type: String,
        default:""
    },
    userId:{
        ref:'User',
        type:mongoose.Schema.Types.ObjectId
    },
    paymentDetails:{
        paymentId:{
            type: String,
            default:""
        },
        payment_method_types :[],
        payment_status:{
            type: String,
            default:""
        }
    },
    shipping_options:[],
    totalAmount:{
        type: Number,
        default:0
    }
}, {
    timestamps: true
})

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;