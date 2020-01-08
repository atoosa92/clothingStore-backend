import {Basket} from '../models/basket';


export const getItems =(req,res)=>{
    console.log('itemmmmmmmmms',req);
    Basket.find({},(err,results)=>{
        if(err){
            res.send(err);
        }
        res.json(results);
        console.log('itemssssss are sent',results)
    })
}

export const postNewQuantit = (req,res)=>{
    console.log('quantityyyyy',req.params);
    console.log('quaaaaaaaaaaaantity',req.body);
    const id = req.params.id;

    Basket.findOneAndUpdate({_id:id},{quantity:req.body.quantity},(err,result)=>{
        if(err){
          return  res.send(err);
        }

        res.json(result);
    })
}
