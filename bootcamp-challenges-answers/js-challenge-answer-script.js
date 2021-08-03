//Changing font on body

const changeFont = () => {
    const body = document.getElementsByTagName('body')
    if (body[0].style.fontFamily === 'cursive') {
        body[0].style.fontFamily = ''
    }else {
        body[0].style.fontFamily = 'cursive'
    }
}

//Map Scroll to Delete Words

const scrolling= (event) => {
//    console.log(event.target.innerText)
    let arrayOfText = event.target.innerText.split(' ')
    console.log(event)
//   console.log(arrayOfText)
    arrayOfText.pop()
//   console.log(arrayOfText)
    event.target.innerText = arrayOfText.join (' ')
}

// Find and Replace Using Regular Expressions

const findAndReplace = (event) => {
    event.preventDefault()
    const findAndReplaceElement = document.getElementById('find-replace-text')
    const find = document.getElementById('text-find').value
    const replace = document.getElementById('text-replace').value
    const expression = new RegExp(find, 'gi')
    console.log(expression)
    findAndReplaceElement.innerText = findAndReplaceElement.innerText.replaceAll(expression, replace)
}

// Highlight Words

const highlightWord = (event) => {
    event.preventDefault()
    const findAndReplaceElement = document.getElementById('highlightArea')
    const find = document.getElementById('text-highlight').value
    const replace = `<span class="bg-warning">${find}</span>`
    const expression = new RegExp(find, 'gi')
    console.log(expression)
    findAndReplaceElement.innerHTML = findAndReplaceElement.innerHTML.replaceAll(expression, replace)
}