import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Routes from './src/routers/routes';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors());

//new connection to our mongo db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/MyDb',{
     useNewUrlParser: true 
});


//serving static files
app.use(express.static('public'));

// bodyParser setup => to parse request (we are taking) to java script object to be readable for api to work on it
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

Routes(app);

console.log('meeeeeeeeeeee',app);

app.listen(PORT,()=>{
    console.log(`helloooo`);
});