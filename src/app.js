import express from 'express';
import './db/connections';
import { ProductCtrl } from './controllers/ProductController';
import { productValidator } from './helpers/ProductValidate';
import { CategoryCtrl } from './controllers/CategoryContoller';
import { categoryValidator } from './helpers/CategoryValidate';
import { PostMasterCtrl } from './controllers/PostMasterController';
import { postMasterValidator } from './helpers/PostMasterValidate';

const PORT = 7777;

const app = express();
app.use(express.json());

app.get('/products', ProductCtrl.getAll);
app.get('/products/:id', ProductCtrl.getByID);
app.post('/products', productValidator, ProductCtrl.create);
app.put('/products/:id',productValidator, ProductCtrl.update);
app.delete('/products/:id', ProductCtrl.delete);

app.get('/category', CategoryCtrl.getAll);
app.get('/category/:id', CategoryCtrl.getByID);
app.post('/category', categoryValidator, CategoryCtrl.create);
app.put('/category/:id', categoryValidator, CategoryCtrl.update);
app.delete('/category/:id', CategoryCtrl.delete);

app.get('/postmaster', PostMasterCtrl.getAll);
app.get('/postmaster/:id', PostMasterCtrl.getByID);
app.post('/postmaster', postMasterValidator, PostMasterCtrl.create);
app.put('/postmaster/:id', postMasterValidator, PostMasterCtrl.update);
app.delete('/postmaster/:id', postMasterValidator, PostMasterCtrl.delete);

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING - ${PORT} port`);
});