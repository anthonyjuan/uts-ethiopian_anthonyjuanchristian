const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const monggo = require('mongoose');
let index = require('./routes/index');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/',index);
app.listen(3000, () => {
  console.log('Express is running...');
})
monggo.connect('mongodb://localhost/uts-ethiopian_anthonyjuanchristian')
monggo.connection.on('connected', function(){
  console.log('mongodb is connected');
})

