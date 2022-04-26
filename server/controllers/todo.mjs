import Todo from '../models/todo.mjs';

export async function getData(req, res) {
   try {
      const data = await Todo.find();
      res.status(200).json(data);
   } catch (err) {
       console.log(err.message);
   }
}

export async function addData(req, res) {
    const data = req.body;
    try {
        await Todo.create(data);
        res.status(201).json(data)
    } catch (err) {
        console.log(err.message);
    }
}

export async function updateData(req, res) {
    const data = req.body;
    try {
      await Todo.where({'_id': data._id}).updateOne(data);
      res.status(200).json(data);
    } catch (err) {
        console.log(err.message);
    }
}

export async function deleteData(req, res) {
    const data = req.body;
    try {
      await Todo.remove({'_id': data._id})
      res.status(200).json({});
    } catch (err) {
        console.log(err.message);
    }
}