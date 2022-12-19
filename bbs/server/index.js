const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const PORT = process.env.port || 8080;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "heaven1004",
    database: "bbs",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
    const sqlQuery = "SELECT * FROM bbs;";
    db.query(sqlQuery, (err, result) => {
        res.send(result);
    });
});

// app.get("/", (req, res) => {
//     const sqlQuery = "INSERT INTO simpleboard (title, content) VALUES ('인셉션', '좋은 영화!')";
//     db.query(sqlQuery, (err, result) => {
//         res.send("success!");
//     });
// });

app.post("/api/insert", (req, res) => {
    const title = req.body.title;
    const nickname = req.body.nickname;
    const content = req.body.content;
    const sqlQuery = "INSERT INTO bbs (title, nickname, content) VALUES (?,?,?);";
    db.query(sqlQuery, [title, nickname, content], (err, result) => {
        res.send("success!");
    });
});

app.listen(PORT, () => {
    console.log("running on port ${PORT}");
});
