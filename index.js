const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}))

const db= [
    'CHAT APP AMAZINGNESS'
]

app.get('/', (req,res)=>{
    res.json(db)
})

app.post('/', (req,res)=>{
    db.push(req.body.message)
    res.json(req.body.message)
})



app.listen(31337,()=>{
    console.log(`now listening on port: 31337`)
} )