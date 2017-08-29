let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //将数据转换成对象放到req.body上
let session = require('express-session');

app.listen(3000);