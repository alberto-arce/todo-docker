const Todo = require('./todo.model');

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener las tareas', error: err });
  }
};

const createTodo = async (req, res) => {
  const { text } = req.body;
  try {
    const newTodo = new Todo({
      text,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: 'Error al crear la tarea', error: err });
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, { text, completed }, { new: true });
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: 'Error al actualizar la tarea', error: err });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json({ message: 'Tarea eliminada' });
  } catch (err) {
    res.status(400).json({ message: 'Error al eliminar la tarea', error: err });
  }
};

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
