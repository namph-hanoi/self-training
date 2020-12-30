const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
// Bring routes
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');
const mongoose = require('mongoose');

// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then((abc, xyz) => console.log(['BD connected   ']));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

// cors
if (process.env.NODE_ENV === 'development') {
  app.use(cors({
    origin: `${process.env.CLIENT_URL}`
  }));
}

// Routes middleware
// app.use(blogRoutes);

// routes
app.use('/api', blogRoutes);
app.use('/api', authRoutes);

// port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`running on port ${port}`)
});