let burger = document.querySelector('.burger')
let ul = document.querySelector('.ul')

function showUL() {
    if (ul.style.display == 'none') {
        ul.style.display = 'flex'
        burger.textContent = 'close' 
    } else {
        ul.style.display = 'none'
        burger.textContent = 'menu'
    }

}



let shortner = document.querySelector('.shortner')
let shortenIt = document.querySelector('.shortenIt')
let error = document.querySelector('.error')

let form = document.querySelector('.shortnerContainer')


shortner.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        shortenIt.click()
    }
})

shortner.addEventListener('input', function () {
    if (shortner.value == '' || shortner.value == null) {
        shortner.style.border = '3px solid hsl(0, 87%, 67%)'
        error.style.display = 'block'
    } else {
        shortner.style.border = 'none'
        error.style.display = 'none'
    }
})







let results = document.querySelector('.results')




shortenIt.addEventListener('click', function () {
    fetch(`https://api.shrtco.de/v2/shorten?url=${shortner.value}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            let onlyLinks = data.result
            let result = `      <div class="result">
            <p class="was">${onlyLinks.original_link}</p>
            <p class="is">${onlyLinks.short_link}</p>
            <button class="copy">Copy</button>
            </div>`
            results.innerHTML += result
            let copy = document.querySelectorAll('.copy')
            for (let i = 0; i < copy.length; i++){
                copy[i].addEventListener('click', function () {
                    navigator.clipboard.writeText(copy[i].previousElementSibling.textContent)
                    copy[i].style.backgroundColor = 'hsl(257, 27%, 26%)'
                    copy[i].textContent = 'Copied!'
                })
            }
            




            console.log(result)
        })
        .catch(function () {
            shortner.style.border = '3px solid hsl(0, 87%, 67%)'
            error.style.display = 'block'
        } )
    
})











