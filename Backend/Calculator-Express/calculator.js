const express = require('express')
const bodyParser = require('body-parser')
PORT = 3001



const app = express()

app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/bmicalculator', (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmiResult = (weight / (height ** 2))
    res.send(`Your BMI is: ${bmiResult}`)
})

app.listen(PORT, () => {
    console.log(`Listening in port: ${PORT}`)
})