import Todo from '../models/todo.mjs';

export async function get(req, res) {
   try {
        const data = await Todo.find();
        res.status(200).json(data);
   } catch (err) {
       console.log(err.message);
   }
}

export async function add(req, res) {
    const data = req.body;
    try {
        await Todo.create(data);
        res.status(201).json(data)
    } catch (err) {
        console.log(err.message);
    }
}

export async function update(req, res) {
    const data = req.body;
    try {
        await Todo.where({'_id': data._id}).updateOne(data);
        res.status(200).json(data);
    } catch (err) {
        console.log(err.message);
    }
}

export async function remove(req, res) {
    const data = req.body;
    try {
        await Todo.remove({'_id': data._id})
        res.status(200).json({});
    } catch (err) {
        console.log(err.message);
    }
}