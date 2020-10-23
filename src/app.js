import express from 'express';
import './db/connections';
import { categoryRouter, postMasterRouter, productRouter } from './routes';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.use('/api/products', productRouter);
app.use('/api/category', categoryRouter);
app.use('/api/postmaster', postMasterRouter);

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING - ${PORT} port`);
});