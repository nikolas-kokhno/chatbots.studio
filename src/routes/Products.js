import { Router } from 'express';
import { ProductCtrl } from '../controllers';
import { productValidator } from '../helpers';

const productRouter = Router();

productRouter.get('/', ProductCtrl.getAll);
productRouter.get('/:id', ProductCtrl.getByID);
productRouter.post('/', productValidator, ProductCtrl.create);
productRouter.put('/:id',productValidator, ProductCtrl.update);
productRouter.delete('/:id', ProductCtrl.delete);

export default productRouter;