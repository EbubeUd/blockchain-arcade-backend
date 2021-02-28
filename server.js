const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const bodyParser = require('body-parser')

//Route files
const auth = require('./routes/auth');

//Load env vars
dotenv.config({ path: './config/config.env' });

//connect to database
connectDB();

const app = express();

//Dev loglging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(cors());

//read json documents
//app.use(express.json())
app.use(bodyParser.json())

//mount routers 
app.use('/api/v1/auth', auth)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));