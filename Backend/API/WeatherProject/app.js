const https = require('https')
require('dotenv').config()
// const http = require('http')
const express = require('express')
const app = express()
PORT = 3001



URL = `https://api.openweathermap.org/data/2.5/weather?lat=48.864716&lon=2.349014&appid=${process.env.WEATHER_API}`

app.get('/', (req, res) => {

    https.get(URL, response => {
        console.log(response.statusCode)

        response.on('data', (data) => {
            // console.log(data.json())
            const climate = JSON.parse(data)
            console.log(climate)
        })
    })

    res.send('Hello')
})




app.listen(PORT, () => {
    console.log(`Listening in port: ${PORT}`)
})