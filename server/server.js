const express = require('express');
const app = express();//this is an instance of express method

// middleware
app.use(express.json());

app.get("/", (request, response) => {
    response.write("<H1> Home for SuperHero App </H1>");
    response.status(200);
    response.end();
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
})