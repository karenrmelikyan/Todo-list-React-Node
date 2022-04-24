import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

const APP_PORT = process.env.APP_PORT;
const app = express();


app.get('/', (req, res) => res.send('Hello Node.js'));

// DB connection & App starting
mongoose.connect(process.env.MONGO_CONNECT_URL)
.then(() => {
    app.listen(APP_PORT, () => console.log(`Server started on port ${APP_PORT}`))
})
.catch((err) => {
    console.log('Mongoose connection error');
});
