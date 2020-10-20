import express from 'express';

const PORT = 7777;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING - ${PORT} port`);
})