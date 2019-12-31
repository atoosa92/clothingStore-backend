import Size from '../models/sizeModel';

export const addnewSizes = (req,res)=>{
    let newSize = new Size(req.body);
    
    newSize.save((err,savedSize)=>{
        if(err){
            return res.send(err);//send to the client err
        }
        res.json(savedSize);//send to the client
        
    });
}

export const getSizes = (req,res)=>{
    Size.find({},(err,result)=>{
       if(err){
          return res.send(err)
       }
       res.json(result);
    });
}


