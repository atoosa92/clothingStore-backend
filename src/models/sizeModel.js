import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const sizeSchema = new Schema({
     
    sizes:{
        type:String
    }
});


const size = mongoose.model('Size',sizeSchema);

export default size;

