import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password:  process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise();

export async function getArticles(){
  const [rows] = await pool.query("SELECT * FROM Articles"); 
  return rows;
}

export async function getArticle(id){
  const [rows] = await pool.query(`
  SELECT *
  FROM Articles
  WHERE ArticleId = ?
`, [id])
  return rows[0];
}

export async function postArticle(author, title, textBody){
  const [rows] = await pool.query(`
  INSERT INTO Articles (author, title, id)
  VALUES (?, ?, ?)
`, [author], [title], [textBody]);
}
