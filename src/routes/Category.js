import { Router } from 'express';
import { CategoryCtrl } from '../controllers';
import { categoryValidator } from '../helpers';

const categoryRouter = Router();

categoryRouter.get('/', CategoryCtrl.getAll);
categoryRouter.get('/:id', CategoryCtrl.getByID);
categoryRouter.post('/', categoryValidator, CategoryCtrl.create);
categoryRouter.put('/:id', categoryValidator, CategoryCtrl.update);
categoryRouter.delete('/:id', CategoryCtrl.delete);

export default categoryRouter;