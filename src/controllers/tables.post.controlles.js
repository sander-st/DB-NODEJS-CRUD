// import databases
import { dbPool } from "../db.js";

export const dbSave = async (req, res) => {
  // const [tableName] = await dbPool.query("SHOW TABLES");
  // console.log(tableName[0].Tables_in_DATES_USERS);
  const datesUsers = req.body,
    sql = `INSERT INTO dates_users (name, lastname, email, dateOfBirth, gender, notes) VALUES (?,?,?,?,?,?)`,
    sqlValues = Object.values(datesUsers); // ===> [...]

  console.log(datesUsers);
  try {
    const [rows, field] = await dbPool.execute(sql, sqlValues);

    // enviar respuesta al frontend si se guardo los datos del usuario
    // res.send(`Inserted ${rows.affectedRows} row(s).`);
    res
      .status(200)
      .json({
        save: true,
        inserted: `Inserted ${rows.affectedRows} rows(s).`,
        message: "Datos guardados correctamente",
      });
  } catch (error) {
    res.status(500).json({ save: false });
  }
};
