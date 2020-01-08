import {addnewProduct} from '../controllers/productController';
import {getPoducts} from '../controllers/productController';
import {PostIntoBasket}  from '../controllers/productController';
import {addnewSizes} from '../controllers/sizeController';
import {getSizes} from '../controllers/sizeController';
import {getItems} from '../controllers/basketController';
import {postNewQuantit} from '../controllers/basketController';

const routes =(app)=>{
   app.route('/product')
       .get(getPoducts)
       .post(addnewProduct);
   app.route('/size')
       .get(getSizes)
       .post(addnewSizes);
   app.route('/shoppingCart')
      .post(PostIntoBasket);
   app.route('/items')
        .get(getItems)
   app.route('/updateQuantity/:id')
      .patch(postNewQuantit)
    
}



export default routes;