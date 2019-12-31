import {addnewProduct} from '../controllers/productController';
import {getPoducts} from '../controllers/productController';
import {PostIntoBasket}  from '../controllers/productController';
import {addnewSizes} from '../controllers/sizeController';
import {getSizes} from '../controllers/sizeController';

const routes =(app)=>{
    app.route('/product')
       .get(getPoducts)
       .post(addnewProduct);
    app.route('/size')
       .get(getSizes)
       .post(addnewSizes);
   app.route('/shoppingCart')
      .post(PostIntoBasket)
    
}



export default routes;