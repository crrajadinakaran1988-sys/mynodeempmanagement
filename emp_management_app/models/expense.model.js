const db = require('../config/db');

exports.create = async (expense) => {
    const {title, Spec, weight, quantity, Salesperson, discount, amount} = expense;
    
    await db.query('INSERT INTO expenses (title, Spec, weight, quantity, Salesperson, discount, amount) VALUES (?, ?, ?, ?, ?, ?, ?)', [title, Spec, weight, quantity, Salesperson, discount, amount]);
}

exports.getAll = async () => {
    const [rows] = await db.query('SELECT * FROM expenses order by id desc');
    return rows;
}

exports.delete = async (id) => {
    await db.query('DELETE FROM expenses WHERE id = ?', [id]);
}


exports.getById = async (id) => {
  const [rows] = await db.query("SELECT * FROM expenses WHERE id = ?", [id])
  return rows[0]
}

exports.update = async (id, { title, Spec, weight, quantity, Salesperson, discount, amount }) => {
  await db.query(
    "UPDATE expenses SET title = ?, Spec = ?, weight = ?, quantity = ?, Salesperson = ?, discount = ?, amount = ? WHERE id = ?",
    [title, Spec, weight, quantity, Salesperson, discount, amount, id]
  )
}