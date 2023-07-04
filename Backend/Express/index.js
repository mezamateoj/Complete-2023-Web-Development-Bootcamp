const express = require('express')
const app = express()
const PORT = 3001

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.get('/contact', (req, res) => {
    res.send('Contact info')
})

app.get('/about', (req, res) => {
    res.send('About route')
})


app.listen(PORT, () => {
    console.log(`Server listening in port: ${PORT}`)
})