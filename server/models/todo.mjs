import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model('Todo', new Schema({
    day:  String, 
    todo: String,
}));