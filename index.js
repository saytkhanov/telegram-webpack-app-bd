const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');
const config = require('./config/index');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use(router);


const start = async () => {
  try {
    await mongoose.connect(config.url, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true
    })
    app.listen(config.port, () => {
      console.log("Server has been started...")
    })
  } catch (e)  {
    console.log(e.message)
  }
}

start();