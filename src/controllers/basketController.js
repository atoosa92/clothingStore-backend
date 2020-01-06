import Basket from '../models/basket';


export const getItems =(req,res)=>{
    Basket.find({},(err,results)=>{
        if(err){
            res.send(err);
        }
        res.json(results);
        console.log('itemssssss are sent',results)
    })
}