const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

const app = express();

//Bodyparser middlewares; 
app.use(bodyparser.json());

//DB config 
const db = require('./config/keys').mongoURI

//Connect to mongo database
mongoose.connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
// Using Routes
app.use('/api/items', items);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening to port ${port}`));