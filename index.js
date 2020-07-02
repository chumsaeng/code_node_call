const express = require('express');

//const {intercepter} = require('./middleware/logMiddleware');
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');

const app = express();

app.use(express.static('./public/'))
app.use(express.json());

//app.use(intercepter);

app.use('/user', userRoute);
app.use('/post', postRoute);

app.listen(3000);
