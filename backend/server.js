import express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.send("Hi John, server is on.");
});


app.listen(3000, () => {
    console.log("Server is on 3000, John.");
});
