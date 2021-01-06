import express from 'express'



const app = express()

app.get('/',(req,res) => {
    res.send("Server is running")
})


app.listen(5000, () => console.log('server started on http://localhost:5000'))