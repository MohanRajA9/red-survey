import express from 'express'
const app = express()
const port = 5000

app.get('/',(req, res) => {
    res.send("Red Survey")
})

app.listen(port, () => console.log(`server started at port ${port}`))

