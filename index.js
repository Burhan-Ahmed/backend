const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config();

console.log("before db")
mongoose.connect(process.env.MONGOURI).then(() => {
    console.log("Connected to Mongo DB")

}).catch((err) => {
    console.log('error in connecting db', err.message)
})
console.log("after db")


const app = express()
app.use(express.json())
app.use(cookieParser())

// CORS configuration
const corsOptions = {
    origin: 'https://stay-ease-front-end.vercel.app/Rooms',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    exposedHeaders: 'Authorization',
    maxAge: 3600,
    preflightContinue: false,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.listen(3000, () => {
    console.log("Server running on port 3000")
})

app.get('/', (req, res) => {
    res.send('Hello World')
});



const userRoutes = require('./routes/user.route');
const adminRoutes = require('./routes/admin.route')
const employeeRegister = require('./routes/registerEmployee.route')
const bookingRoutes = require('./routes/booking.route');
const DisplayRooms = require('./routes/viewRoom.routes');
const payment = require('./routes/payment.route')
const messageRoutes = require('./routes/message.route');

app.use('/user', userRoutes)
app.use('/admin', adminRoutes)
app.use('/booking', bookingRoutes);
app.use('/message', messageRoutes);
//iska matlab k default route '/' k agy employeeRegister pr path define kro 
app.use('/', employeeRegister)
app.use('/api', DisplayRooms);
app.use('/pay', payment);