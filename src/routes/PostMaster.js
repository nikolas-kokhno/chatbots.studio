import { Router } from 'express';
import { PostMasterCtrl } from '../controllers';
import { postMasterValidator } from '../helpers';

const postMasterRouter = Router();

postMasterRouter.get('/', PostMasterCtrl.getAll);
postMasterRouter.get('/:id', PostMasterCtrl.getByID);
postMasterRouter.post('/', postMasterValidator, PostMasterCtrl.create);
postMasterRouter.put('/:id', postMasterValidator, PostMasterCtrl.update);
postMasterRouter.delete('/:id', postMasterValidator, PostMasterCtrl.delete);

export default postMasterRouter;