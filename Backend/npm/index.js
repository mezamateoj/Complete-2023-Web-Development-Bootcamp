// const generateName = require('sillyname')
import generateName from 'sillyname'
import generateStupidName from 'sillyname'
import superheroes from 'superheroes'


let name = generateName()
let stupidName = generateName()
const superName = superheroes.random()


console.log(`My name is: ${name}`)
console.log(`My other name is: ${stupidName}`)
console.log(`My Super name is: ${superName}`)

