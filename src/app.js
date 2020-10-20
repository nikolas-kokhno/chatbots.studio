import express from 'express';
import './db/connections';
import { ProductCtrl } from './controllers/ProductController';
import { productValidator } from './helpers/ProductValidate';

const PORT = 7777;

const app = express();
app.use(express.json());

app.get('/products', ProductCtrl.getAll);
app.get('/products/:id', ProductCtrl.getByID);
app.post('/products', productValidator, ProductCtrl.create);
app.put('/products/:id',productValidator, ProductCtrl.update);
app.delete('/products/:id', ProductCtrl.delete);

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING - ${PORT} port`);
});