let canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let c = canvas.getContext('2d')

function Particles (x, y, r) {

    this.x = x;
    this.y = y;
    this.r = r;

    this.update = () => {
        this.draw()
    }

    this.draw = () => {
        c.beginPath();
        c.arc(this.x , this.y, this.r, 0, Math.PI *2, false)
        c.fillStyle = '#2a2a2a'
        c.fill();
        c.shadowBlur = 20
        c.shadowColor = 'black'
        c.shadowOffsetX = 0
        c.closePath();
    }
}

randomFunction = (min, max) => {
    return Math.random() * (max - min + 1) + min

}

let a = randomFunction(0, canvas.width)
let b = randomFunction(0, canvas.height)
let d = randomFunction(0.5, 1)

let p1 = new Particles(a, b, d)

particleArray = []
for(let i=0; i<10; i++) {
    let a = randomFunction(0, canvas.width)
    let b = randomFunction(0, canvas.height)
    let d = randomFunction(1, 2)

    particleArray.push(new Particles(a, b, d))
}

particleArray.forEach(particle => {
    particle.update()
});