import { dbPool } from "../db.js";

export const db = async (req, res) => {
  try {
    const db = await dbPool.query("SELECT * FROM dates_users");
    res.json(db[0]);
  } catch (error) {
    res.status(500).send("Not connection database.");
  }
};
