import express from 'express';
import './db/connections';
import { ProductCtrl } from './controllers/ProductController';
import { productValidator } from './helpers/ProductValidate';
import { CategoryCtrl } from './controllers/CategoryContoller';
import { categoryValidator } from './helpers/CategoryValidate';

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

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING - ${PORT} port`);
});