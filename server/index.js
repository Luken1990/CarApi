const express = require('express');
//environment variable
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8080;
const app = express();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connect MongoDB
connectDB();
app.use(express.json());
app.use('/api', require('./routes/carRoutes.js'));

app.listen(port, () => console.log(`Server on port: http://localhost:${port}`));
