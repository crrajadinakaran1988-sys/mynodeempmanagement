const db = require('../config/db');

exports.create = async (expense) => {
  console.console.log("Inserting values into DB before const");
    const {Emp_Name, Emp_Designation, Emp_email_id, Emp_Cnt_no, Emp_Dept, Emp_DOJ, Emp_Location} = expense;
    console.console.log("Inserting values into DB");
    
    await db.query('INSERT INTO Employee (Emp_Name, Emp_Designation, Emp_email_id, Emp_Cnt_no, Emp_Dept, Emp_DOJ, Emp_Location) VALUES (?, ?, ?, ?, ?, ?, ?)', [Emp_Name, Emp_Designation, Emp_email_id, Emp_Cnt_no, Emp_Dept, Emp_DOJ, Emp_Location]);
}

exports.getAll = async () => {
    const [rows] = await db.query('SELECT * FROM Employee order by Emp_id desc');
    return rows;
}

exports.delete = async (Emp_id) => {
    await db.query('DELETE FROM Employee WHERE Emp_id = ?', [Emp_id]);
}


exports.getById = async (Emp_id) => {
  const [rows] = await db.query("SELECT * FROM Employee WHERE Emp_id = ?", [Emp_id])
  return rows[0]
}

exports.update = async (Emp_id, { Emp_Name, Emp_Designation, Emp_email_id, Emp_Cnt_no, Emp_Dept, Emp_DOJ, Emp_Location }) => {
  await db.query(
    "UPDATE Employee SET Emp_Name = ?, Emp_Designation = ?, Emp_email_id = ?, Emp_Cnt_no = ?, Emp_Dept = ?, Emp_DOJ = ?, Emp_Location = ? WHERE Emp_id = ?",
    [Emp_Name, Emp_Designation, Emp_email_id, Emp_Cnt_no, Emp_Dept, Emp_DOJ, Emp_Location, Emp_id]
  )
}