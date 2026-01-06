import express from "express";

const app = express();

app.get('/api', (req, res) => {
    res.status(200).send({
        message: 'Hello'
    })
});





export default app;