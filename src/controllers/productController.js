
import Product from '../models/productModel';
import {Basket} from '../models/basket';
import Size from "../models/sizeModel";


//SAVE PRODUCTS OR ITEMS IN THE BODY OF THE OBJECT
export const addnewProduct = (req,res) =>{
    
    
    let newProduct = new Product(req.body);
    
        //newProduct.sizes.push("5e03d8065242a41700dbd456");

        newProduct.save((err,savedProduct)=>{
            if(err) return res.send(err);
            res.json(savedProduct);
       
   });
    
}

//get all products
export const getPoducts = (req,res) =>{

   
   let filter = {};
   if(req.query.sizeFilter){
      filter = {
         "sizes":{
            $in:req.query.sizeFilter
         }
      };
   }
     
   Product.find(filter,(err,result)=>{
      if(err){
         return res.send(err);
      }
         console.log('results',result);
         const totalResultCount = result.length;
         res.json({products:result,productCount:totalResultCount});
   });
}

export const PostIntoBasket = (req,res)=>{
     console.log('hellooooo',req.body);
     const id = req.body.id
     Product.findById({_id:id},(err,result)=>{
         if(err){
             res.send(err);
            console.log(' cant bring tha data with id');
         }
         let newBasket = new Basket({
            productId:result._id,
            img:result.img,
            title:result.title,
            price:result.price
         });
         newBasket.save((err,basketResult)=>{
            if(err){
               return res.send(err,'can not save in basket');
                
            }
            res.json(basketResult);
            console.log(basketResult);
         })

     })
   
}