import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BasketSchema = Schema({
     
     productId:[{type:Schema.Types.ObjectId,ref:'Product'}]
     ,
     img:{
         type:String
        },
        title:{
            type:String
        },
        price:{
            type:String
        },
        quantity:{
           type:Number,
           default:1
        }
})

export const Basket = mongoose.model('basket',BasketSchema);