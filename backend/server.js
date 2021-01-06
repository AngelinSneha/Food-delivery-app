import express from 'express'
import  db  from './db.js'


const app = express()

app.get('/',(req,res) => {
    res.send("Server is running")
})


db.sync({force: true })
    .then(()=>{
        console.log("Database and tables created")
        app.listen(5000, ()=> console.log("server started on http://localhost:5000") )
    })
