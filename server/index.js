const express = require('express')
const dotenv = require('dotenv')
require('./models/index')
const userRoutes = require('./routes/user');
const { notFound } = require('./middlewares/notFound.js')

dotenv.config()

// app
const app = express()
app.use(express.json())

// routes middleware
app.use('/api/users', userRoutes)

app.use(notFound)

// port
const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
