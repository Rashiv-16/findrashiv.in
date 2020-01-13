window.onload =  () => {
    let body = document.querySelector('body')
    body.style.opacity = 1
}

// Animation for Introduction section
const introOne = document.querySelector('.intro-sub1')
const introTwo = document.querySelector('.intro-sub2')
const timeDelay = 3500  //3500
const opacityDelay = 500  //500

animate1 = () => {
    introOne.style.opacity = '0'
    setTimeout(() => {
        introOne.style.display = 'none'
        introOne.style.transform = 'translateX(-25%)'
        introTwo.style.display = 'block'
        setTimeout(animate2, 0)  
    }, opacityDelay)
}

animate2 = () => {
    introTwo.style.opacity = '1'
    introTwo.style.transform = 'translateX(0)'
    setTimeout(() => {
        introTwo.style.opacity = '0'
        setTimeout(animate3, opacityDelay)
    }, timeDelay)
}

animate3 = () => {
    introTwo.style.display = 'none'
    introTwo.style.transform = 'translateX(-25%)'
    introOne.style.display = 'block'
    setTimeout(() => {
        introOne.style.opacity = '1'
        introOne.style.transform = 'translateX(0)'
        setTimeout(animate1, timeDelay)

    }, 0)
}

setTimeout(animate1, timeDelay)

//carousel functionality for showcase

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const slides = document.querySelectorAll('.show')


nextHandler = () => {
    const current = document.querySelector('.current')
    console.log('yo')
    current.classList.remove('current')
    
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current')
        console.log(current.nextElementSibling)
        // current.classList.remove('current')

    } else {
        slides[0].classList.add('current')
    }

    // setTimeout(() => {
    //     current.classList.remove('current')
    // })
    
}

prevHandler = () => {
    const current = document.querySelector('.current')
    console.log('yo')
    current.classList.remove('current')
    
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current')
        console.log(current.nextElementSibling)
        current.classList.remove('current')

    } else {
        slides[slides.length - 1].classList.add('current')
    }
}

next.addEventListener('click', ()=> {
    nextHandler()
})

prev.addEventListener('click', ()=> {
    prevHandler()
})

setInterval(() => {
    nextHandler()
}, 5000)