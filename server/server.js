const express = require('express');
const config = require('./config');
const app = express();//this is an instance of express method
const morgan = require('morgan');
const router = require('./routes');


// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use('/api', router);



app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
})