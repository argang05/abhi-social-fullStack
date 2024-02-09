import mysql from "mysql2";

export const db = mysql.createConnection({

    host : "localhost",
    user : "root",
    password : "brolin@2003",
    database : "social"
});