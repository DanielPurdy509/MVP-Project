import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import cors from "cors";
const { Client } = pg;

const app = express();
app.use(express.static("public"));

dotenv.config();
const port = process.env.PORT || 3000;

const client = new Client(process.env.DATABASE_URL);
client.connect();

app.use(express.json());

app.get("/api/test", function(req, res) {   
    res.send("Hello, world!");
});

app.get('/api/login',(req,res) => {
    let username = req.query.param1;
    let password = req.query.param2;
    client.query(`SELECT * FROM users WHERE name = $1 AND password = $2`, [username,password])
    .then((result) => {
        if(result.rows.length == 0){
            console.log(result);
            res.status(404).send("The user could not be found");
        }
        else {
            res.status(200).send("Request handled successfully");
        }
        // else{
            // client.query(`SELECT * FROM cards WHERE `)
        // }
    })
})

app.get('/api/cards',(req, res) => {
    client.query(`SELECT * FROM cards;`, (err, response) => {
        console.log(err ? err : response.rows)
        res.json(response.rows)
    })
})

app.post('/api/cards',function(req,res){
    client.query(`INSERT INTO cards (subject,definition) VALUES ($1,$2) RETURNING *`,[
        req.body.subject,
        req.body.definition
    ])
    .then((result) => {
        res.send(result.rows);
    });
});

app.delete("/api/cards/:id", (req,res) => {
    let id = req.params.id;
    if(isNaN(id)) {
        res.status(404).send("Enter a valid task ID");
        return;
    }
    client.query(`SELECT * FROM cards WHERE id = $1;`, [id]).then((result) => {
        if(result.rows.length == 0) {
            res.status(404).send("The task you are trying to delete does not exist");
            return;
        } else {
            client.query(`DELETE FROM cards WHERE id = $1 RETURNING *;`, [id])
            .then((result) => {
                let deletedCardName = result.rows[0].subject;
                res.status(200).send(`"${deletedCardName}" has been deleted`);
            })
        }
    })
})

app.listen(port, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server started on port ${port}`);
    }
});
