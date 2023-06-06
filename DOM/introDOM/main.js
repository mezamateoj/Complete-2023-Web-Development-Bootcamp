
// this will change the whole document
// const addElement = document.body.innerHTML = '<h2>Heading 2</h2>'

// change the background color to red
// document.body.style.background = "red";

// // change it back after 1 second
// setTimeout(() => document.body.style.background = "", 6000);

// use innerHTML to change value selected.
let changeTitle = document.querySelector('h1').innerHTML = 'Change title';
// let getElementID = document.getElementById('bio').innerHTML = 'Change with ID';
// let getbyClass = document.getElementsByClassName('middle')[1].innerHTML = 'Change using class'
// let getByTag = document.getElementsByTagName('li')[1].innerHTML = 'change by tag'

// // can also style an element - fix
// let blueElement = document.getElementsByTagName('body')
// blueElement.style.backgroundColor = '#201F2E'

// // can also traverse the DOM tree
// // select first element (child) of the document body.
// const first = document.querySelector('body').children[0]
// first.innerHTML = 'BROWN BEARS ARE AWESOME!'  // set the first element

// // select the parent of node: in this case the body
// first.parentNode.style.backgroundColor = 'beige'

// // create and insert elements: createElement()
// // it does not append it to the document. It creates an empty element with no inner HTML.
// // In order to create an element and add it to the web page, you must assign it to be the child of an 
// // element that already exists on the DOM, referred to as the parent element. We call this process appending
// // we achieve this using .appendChild()
// const newAttraction = document.createElement('li')
// newAttraction.id = 'vespa'
// newAttraction.innerHTML = 'Rent a Vespa';

// document.querySelector('#italy-attractions').appendChild(newAttraction)

// // remove a child
// let elementToRemove = document.getElementById('vespa')
// document.getElementById('italy-attractions').removeChild(elementToRemove)

// add click interactivity: basic
const element = document.querySelector('#bio')
let isChanged = false

function changeColor() {
    if (!isChanged) {
        element.style.backgroundColor = 'blue'
        element.style.color = 'white'
        element.innerHTML = 'I change'
    } else {
        element.style.backgroundColor = ''
        element.style.color = 'black'
        element.innerHTML = 'A summary'
    }
    isChanged = !isChanged;
}

const grabButton = document.querySelector('#first-button')
grabButton.addEventListener('click', changeColor);