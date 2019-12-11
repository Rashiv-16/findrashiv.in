// window.onload = () => {
//     let body = document.querySelector('body')


    

// }
window.onload =  () => {
    let body = document.querySelector('body')
    body.style.opacity = 1
}


const introOne = document.querySelector('.intro-sub1')
const introTwo = document.querySelector('.intro-sub2')
const timeDelay = 3500
const opacityDelay = 400

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
        // animate1();

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