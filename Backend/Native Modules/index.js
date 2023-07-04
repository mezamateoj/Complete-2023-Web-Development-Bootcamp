const fs = require('fs');

const textMessage = 'This is a test for writeFile'

const textArr = [
    'Hey',
    'Second Line',
    'Test1',
    textMessage
]


fs.writeFile('message.txt', textArr.join('\n'), (err) => {
    if(err) {
        throw err
    }
    console.log('the file has been saved')
})

// read the message.txt file
fs.readFile('./message.txt', 'utf8',(err, data) => {
    if(err) throw err;
    console.log(data)
})