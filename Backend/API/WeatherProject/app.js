const https = require('https')
require('dotenv').config()
// const http = require('http')
const express = require('express')
const app = express()
PORT = 3001



URL = `https://api.openweathermap.org/data/2.5/weather?lat=48.864716&lon=2.349014&units=metric&appid=${process.env.WEATHER_API}`

app.get('/', (req, res) => {

    https.get(URL, response => {
        console.log(response.statusCode)

        response.on('data', (data) => {
            // console.log(data.json())
            const climate = JSON.parse(data)
            const {temp, humidity} = climate.main
            const icon = climate.weather[0].icon
            const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
            const description = climate.weather[0].description
            res.setHeader("Content-Type", "text/html")
            res.write("<img src='" + imageUrl + "'>")
            res.write(`Paris humidity currently is ${humidity}`)
            res.write(`Temperature in Paris is ${temp} Celsius, with ${description}`)
            res.send()
        })

    })
})




app.listen(PORT, () => {
    console.log(`Listening in port: ${PORT}`)
})