import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import todoRoute from './routes/todo.mjs';

// init
const APP_PORT = process.env.APP_PORT;
const app = express();

// routes
app.use(express.json());
app.use('/api/todo', todoRoute);

// DB connection & App starting
mongoose.connect(process.env.MONGO_CONNECT_URL)
.then(() => {
    app.listen(APP_PORT, () => console.log(`Server started on port ${APP_PORT}`));
})
.catch((err) => {
    console.log(err.message);
});
