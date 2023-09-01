const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const port = 3000;
const expressLayouts = require('express-ejs-layouts');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname , 'app', 'views'));
app.use(expressLayouts);

const web = require('./routes/web');
const api = require('./routes/api');

//connected database
//require('./config/db');

app.use('/',web);
app.use('/api',api)

app.listen(port,()=>{
    console.log(`Server running [ http://localhost:${port} ]`);
});