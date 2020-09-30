let rightArrow = document.querySelector('.right-arrow')
let leftArrow = document.querySelector('.left-arrow')
let mainBg = document.querySelectorAll('.mainbg')
let dot = document.querySelectorAll('.dot')
let article = document.querySelector('article')

count = 1
opacity = 1
current = 0
flag = 0
scale = 2

rightArrowAnimation1 = () => {
    count -= 0.10
    opacity -= 0.10
    scale -= 0.10
    mainBg[current].style.transform = `scale(${count})`
    mainBg[current].style.opacity = `${opacity}`
    dot[current].style.transform = `scale(${scale})`

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
    scale += 0.10
    mainBg[current + 1].style.transform = `scale(${count})`
    mainBg[current + 1].style.opacity = `${opacity}`
    dot[current + 1].style.transform = `scale(${scale})`

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
        touchCounter++
        rightArrowAnimation1()
    }

}

leftArrowAnimation1 = () => {
    count -= 0.10
    opacity -= 0.10
    scale -= 0.10
    mainBg[current].style.transform = `scale(${count})`
    mainBg[current].style.opacity = `${opacity}`
    dot[current].style.transform = `scale(${scale})`

    if (count > 0) {
        requestAnimationFrame(leftArrowAnimation1)
    }

    if (count <= 0) {
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
    scale += 0.1
    mainBg[current - 1].style.transform = `scale(${count})`
    mainBg[current - 1].style.opacity = `${opacity}`
    dot[current - 1].style.transform = `scale(${scale})`

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
        touchCounter--
        console.log("yay")
        leftArrowAnimation1()
    }
}

rightArrow.addEventListener(('click'), rightArrowFunction)
leftArrow.addEventListener(('click'), leftArrowFunction)

let initialX = null;
let initialY = null;
let initialTime = null;
let touchCounter = 0;

article.addEventListener('touchstart', (e) => {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
    initialTime = new Date;
})

article.addEventListener('touchmove', (e) => {
    if(initialX === null) {
        return ;
    }

    if(initialY === null) {
        return ;
    }

    let currentX = e.touches[0].clientX;
    let currentY = e.touches[0].clientY;
    let currentTime = new Date;

    let diffX = currentX - initialX;
    let diffY = currentY - initialY;
    let diffTime = currentTime.getTime() - initialTime.getTime();

    if(Math.abs(diffX) > Math.abs(diffY)) {
        if(diffX > 80 && diffTime < 600 && diffTime > 100) {
            if(touchCounter > 0 && touchCounter <= 3) {
                leftArrowFunction() 
            }
        } else if (diffX < -80 && diffTime < 600 && diffTime > 100) {
            if(touchCounter >= 0 && touchCounter < 2) {
                rightArrowFunction() 
            }
        }
    }
    // initialX = null
    // initialY = null
})
