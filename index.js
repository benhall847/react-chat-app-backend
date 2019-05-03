const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}))

const db= [
    'CHAT APP AMAZINGNESS',
    'this is AMAZING'
]

app.get('/api', (req,res)=>{
    res.json(db)
})

app.post('/api', (req,res)=>{
    console.log(req.body)
    console.log(req.data)
    db.push(req.body.message)
    res.json(req.body.message)
})



app.listen(31337,()=>{
    console.log(`now listening on port: 31337`)
} )