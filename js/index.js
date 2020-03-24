let rightArrow = document.querySelector('.right-arrow')
let leftArrow = document.querySelector('.left-arrow')
let mainBg = document.querySelectorAll('.mainbg')
let mainTxt = document.querySelectorAll('.maintxt')
let dot = document.querySelectorAll('.dot')
let logo = document.querySelector('.logo')
let logoSVG = document.querySelector('.logo-svg')

// Right Arrow Motion Function which triggers in every 5 seconds
rightArrowAnimation = () => {
    setInterval(motionFunction, 5000)
    setInterval(motionFunction1, 5050)

}

motionFunction = () => {
    rightArrow.style.transform = 'translateX(50px)'
}

motionFunction1 = () => {
    rightArrow.style.transform = 'translateX(0)'
}

// rightArrowAnimation()

count = 0
textCount = 0
opacity = 1
current = 0

animateMotionLeft1 = () => {

        count = count + 20
        opacity = opacity - 0.05
        textCount = textCount + 5
        mainBg[current - 1].style.transform = `translateX(${-count}px)`
        mainBg[current - 1].style.opacity = `${opacity}`
        mainTxt[current - 1].style.transform = `translateX(${-textCount}px)`
        mainTxt[current - 1].style.opacity = `${opacity}`
    
        if(count < 500) requestAnimationFrame(animateMotionLeft1)
        if(count === 500) {
            mainBg[current - 1].classList.remove('current')
            mainBg[current].classList.add('current')
            mainTxt[current - 1].classList.remove('current')
            mainTxt[current].classList.add('current')
            dot[current - 1].style.transform = `scale(1)`
            dot[current].style.transform = `scale(${1.8})`
            opacity = 0
            animateMotionLeft2()
    }
 
}

animateMotionLeft2 = () => {
    count = count - 20
    opacity = opacity + 0.05
    textCount = textCount - 5
    mainBg[current].style.transform = `translateX(${count}px)`
    mainBg[current].style.opacity = `${opacity}`
    mainTxt[current].style.transform = `translateX(${textCount}px)`
    mainTxt[current].style.opacity = `${opacity}`

    if(count > 0) requestAnimationFrame(animateMotionLeft2)
    if (count === 0) opacity = 1
}

let l = 0
let t = 0
let h = 0
let flag = 0

logoMotionFunction = () => {
    l = l + (5/15)
    t = t + 1
    h = h + 1
  
    logo.style.transform = `translateX(${l}vh) translateY(${-t}vh)` //10
    logoSVG.style.height = `${40 - h}rem` //40
    if ( h < 16 )requestAnimationFrame(logoMotionFunction)
}

logoMotionFunction2 = () => {
    l = l - (5/15)
    t = t - 1
    h = h - 1
  
    logo.style.transform = `translateX(${l}vh) translateY(${-t}vh)` //10
    logoSVG.style.height = `${40 - h}rem` //40
    if ( h > 0 )requestAnimationFrame(logoMotionFunction2)
}


right = () => {

    if (current === 0) {
        
    }

    if (current === 1) {
        leftArrow.classList.remove('display-none')
        logoMotionFunction()
        animateMotionLeft1()
        rightArrow.removeEventListener('click')
    }

    if (current === 2) {
        rightArrow.classList.add('display-none')
        animateMotionLeft1()
    }

    // mainBg[current - 1].classList.remove('current')

}

animateMotionRight1 = () => {

        count = count + 20
        opacity = opacity - 0.05
        textCount = textCount + 5
        mainBg[current + 1].style.transform = `translateX(${count}px)`
        mainBg[current + 1].style.opacity = `${opacity}`
        mainTxt[current + 1].style.transform = `translateX(${textCount}px)`
        mainTxt[current + 1].style.opacity = `${opacity}`
    
        if(count < 500) requestAnimationFrame(animateMotionRight1)
        if(count === 500) {
            mainBg[current + 1].classList.remove('current')
            mainBg[current].classList.add('current')
            mainTxt[current + 1].classList.remove('current')
            mainTxt[current].classList.add('current')
            dot[current + 1].style.transform = `scale(1)`
            dot[current].style.transform = `scale(${1.8})`
            opacity = 0
            animateMotionRight2()
    }

}

animateMotionRight2 = () => {
    count = count - 20
    opacity = opacity + 0.05
    textCount = textCount - 5
    mainBg[current].style.transform = `translateX(${-count}px)`
    mainBg[current].style.opacity = `${opacity}`
    mainTxt[current].style.transform = `translateX(${-textCount}px)`
    mainTxt[current].style.opacity = `${opacity}`

    if(count > 0) requestAnimationFrame(animateMotionRight2)
    if (count === 0) opacity = 1
}

left = () => {

    if (current === 0) {
        leftArrow.classList.add('display-none')
        animateMotionRight1()
        logoMotionFunction2()
    }

    if (current === 1) {
        rightArrow.classList.remove('display-none')
        animateMotionRight1()
    }

    if (current === 2) {
        rightArrow.classList.add('display-none')
        animateMotionRight1()
    }

    // mainBg[current - 1].classList.remove('current')

}



rightArrow.addEventListener('click', () => {
    if (count === 0) {
        window.requestAnimationFrame(right)
        current++
    }
})


leftArrow.addEventListener('click', () => {
    if (count === 0) {
        window.requestAnimationFrame(left)
        current--
    }
})