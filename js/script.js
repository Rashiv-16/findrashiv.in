let rightArrow = document.querySelector('.right-arrow')
let leftArrow = document.querySelector('.left-arrow')
let mainBg = document.querySelectorAll('.mainbg')
let dot = document.querySelectorAll('.dot')

count = 1
opacity = 1
current = 0
flag = 0
scale = 2

rightArrowAnimation1 = () => {
    count -= 0.10
    opacity -= 0.10
    mainBg[current].style.transform = `scale(${count})`
    mainBg[current].style.opacity = `${opacity}`
    dot[current].style.transform = `scale(${scale})`
    scale -= 0.08

    if (count > 0) {
        requestAnimationFrame(rightArrowAnimation1)
    }

    if (count <= 0) {

        setTimeout(() => {
            mainBg[current].classList.add('display-none')
            mainBg[current + 1].classList.remove('display-none')
            rightArrowAnimation2()
        }, 300)
    }
}

rightArrowAnimation2 = () => {
    count += 0.1
    opacity += 0.10
    mainBg[current + 1].style.transform = `scale(${count})`
    mainBg[current + 1].style.opacity = `${opacity}`
    dot[current + 1].style.transform = `scale(${scale})`
    scale += 0.08

    if (count < 1) {
        requestAnimationFrame(rightArrowAnimation2)
    }
    if (count >= 1) {
        current++
        if (current === 1) leftArrow.classList.remove('display-none')
        if (current === 2) rightArrow.classList.add('display-none')
        flag = 0
    }
}

rightArrowFunction = () => {
    if (flag === 0) {
        flag = 1
        rightArrowAnimation1()
    }

}

leftArrowAnimation1 = () => {
    count -= 0.10
    opacity -= 0.10
    mainBg[current].style.transform = `scale(${count})`
    mainBg[current].style.opacity = `${opacity}`
    dot[current].style.transform = `scale(${scale})`
    scale -= 0.08

    if (count > 0) {
        requestAnimationFrame(leftArrowAnimation1)
    }

    if (count <= 0) {

        // console.log(123)
        // mainBg[current].classList.add('display-none')
        // mainBg[current + 1].classList.remove('display-none')
        // rightArrowAnimation2()
        setTimeout(() => {
            mainBg[current].classList.add('display-none')
            mainBg[current - 1].classList.remove('display-none')
            leftArrowAnimation2()
        }, 300)
    }
}

leftArrowAnimation2 = () => {
    count += 0.1
    opacity += 0.10
    mainBg[current - 1].style.transform = `scale(${count})`
    mainBg[current - 1].style.opacity = `${opacity}`
    dot[current - 1].style.transform = `scale(${scale})`
    scale += 0.08

    if (count < 1) {
        requestAnimationFrame(leftArrowAnimation2)
    }
    if (count >= 1) {
        current--
        if (current === 0) leftArrow.classList.add('display-none')
        if (current === 1) rightArrow.classList.remove('display-none')
        flag = 0
    }
}

leftArrowFunction = () => {
    if (flag === 0) {
        flag = 1
        leftArrowAnimation1()
    }

}

rightArrow.addEventListener(('click'), rightArrowFunction)
leftArrow.addEventListener(('click'), leftArrowFunction)

// animateMotionLeft1 = () => {

//         count = count + 20
//         opacity = opacity - 0.05
//         textCount = textCount + 5
//         mainBg[current - 1].style.transform = `translateX(${-count}px)`
//         mainBg[current - 1].style.opacity = `${opacity}`
    
//         if(count < 500) requestAnimationFrame(animateMotionLeft1)
//         if(count === 500) {
//             mainBg[current - 1].classList.remove('current')
//             mainBg[current].classList.add('current')
//             dot[current - 1].style.transform = `scale(1)`
//             dot[current].style.transform = `scale(${1.8})`
//             opacity = 0
//             animateMotionLeft2()
//     }
 
// }

// animateMotionLeft2 = () => {
//     count = count - 20
//     opacity = opacity + 0.05
//     textCount = textCount - 5
//     mainBg[current].style.transform = `translateX(${count}px)`
//     mainBg[current].style.opacity = `${opacity}`

//     if(count > 0) requestAnimationFrame(animateMotionLeft2)
//     if (count === 0) opacity = 1
// }

// right = () => {

//     if (current === 0) {
        
//     }

//     if (current === 1) {
//         leftArrow.classList.remove('display-none')
//         animateMotionLeft1()
//         // rightArrow.removeEventListener('click')
//     }

//     if (current === 2) {
//         rightArrow.classList.add('display-none')
//         animateMotionLeft1()
//     }

//     // mainBg[current - 1].classList.remove('current')

// }

// animateMotionRight1 = () => {

//         count = count + 20
//         opacity = opacity - 0.05
//         textCount = textCount + 5
//         mainBg[current + 1].style.transform = `translateX(${count}px)`
//         mainBg[current + 1].style.opacity = `${opacity}`
    
//         if(count < 500) requestAnimationFrame(animateMotionRight1)
//         if(count === 500) {
//             mainBg[current + 1].classList.remove('current')
//             mainBg[current].classList.add('current')
//             dot[current + 1].style.transform = `scale(1)`
//             dot[current].style.transform = `scale(${1.8})`
//             opacity = 0
//             animateMotionRight2()
//     }

// }

// animateMotionRight2 = () => {
//     count = count - 20
//     opacity = opacity + 0.05
//     textCount = textCount - 5
//     mainBg[current].style.transform = `translateX(${-count}px)`
//     mainBg[current].style.opacity = `${opacity}`

//     if(count > 0) requestAnimationFrame(animateMotionRight2)
//     if (count === 0) opacity = 1
// }

// left = () => {

//     if (current === 0) {
//         leftArrow.classList.add('display-none')
//         animateMotionRight1()
//     }

//     if (current === 1) {
//         rightArrow.classList.remove('display-none')
//         animateMotionRight1()
//     }

//     if (current === 2) {
//         rightArrow.classList.add('display-none')
//         animateMotionRight1()
//     }


// }


// rightArrow.addEventListener('click', () => {
//     if (count === 0) {
//         window.requestAnimationFrame(right)
//         current++
//     }
// })


// leftArrow.addEventListener('click', () => {
//     if (count === 0) {
//         window.requestAnimationFrame(left)
//         current--
//     }
// })

