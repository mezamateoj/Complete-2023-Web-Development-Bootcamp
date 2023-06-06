
let newItems = [];

const createItem = function() {
    const grabInput = document.querySelector('#addinput').value

    const create = document.createElement('div')
    create.setAttribute('class', 'newDiv')

    const text = document.createElement('span')
    text.innerHTML = grabInput

    create.appendChild(text)
}

const clickAdd = document.querySelector('.add-button').addEventListener('click', createItem);