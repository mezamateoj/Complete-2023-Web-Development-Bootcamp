const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const client = require("@mailchimp/mailchimp_marketing");
const https = require('https')
PORT = 3001

client.setConfig({
    apiKey: process.env.MAIL_API,
    server: "us21",
});

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
// use static files in my server
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    try {
        return res.sendFile(__dirname + '/index.html')
        
    } catch (error) {
        return res.status(error.status).send(error.message)        
    }
})


app.post('/', (req, res) => {
    const name = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;


    const run = async () => {
        try {
            const response = await client.lists.batchListMembers(process.env.LIST_ID, {
                members: [{
                    email_address: email,
                    status: "subscribed",
                    merge_fields: {
                        FNAME: name,
                        LNAME: lastName
                    }
                }],
            });
            console.log(response);
            res.status(200);
            res.sendFile(__dirname + '/success.html')
            // res.end()
        } catch(err) {
            console.log(err);
            res.status(500);
            res.sendFile(__dirname + '/failure.html')
        }
    };
      
    run();


})



app.listen(PORT, () => {
    console.log(`Listening in port: ${PORT}`)
})
