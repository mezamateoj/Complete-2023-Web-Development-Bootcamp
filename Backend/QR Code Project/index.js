import inquirer from 'inquirer';
import qr from 'qr-image'
import { writeFile, createWriteStream } from 'node:fs';


inquirer
  .prompt([{
    type: 'input',
    name: 'url',
    message: 'Provide an url',
    default: 'www.google.com'
    },
  ])
  .then((answers) => {
    // image generation from qr
    const image = qr.image(answers.url)
    image.pipe(createWriteStream('qr-image.png'))

    // save input url into txt
    writeFile('urls.txt', answers.url, (err) => {
        if(err) throw err;
        console.log('Added to txt file')
    })
    console.info('Link', answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log(error)
    } else {
      console.log('Not a valid url')
    }
});




