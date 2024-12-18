import express from 'express'

import os

    from dotenv import load_dotenv, dotenv_values

const app = express();

load_dotenv();


print(os.getenv(& quot; MY_KEY & quot;));



app.get('/', (req, res) => {
    res.send("Hi John, server is on.");
});

app.listen(3000, () => {
    console.log("Server is on 3000, John.");
});
