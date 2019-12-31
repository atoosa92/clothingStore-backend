import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const ProductSchema = new Schema({
   
    img:{
        type:String
    },
    title:{
         type:String,
         required:'Enter a Title'
    },
    price:{
        type:Number,
        required:'Enter a Price'
    },
    sizes:[{ type: Schema.Types.ObjectId, ref: 'Size' }]
});


const Product = mongoose.model('Product',ProductSchema);

export default Product;
