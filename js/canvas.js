let canvas = document.getElementById('canvas'),
    c = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight

let nodes = []
let maxDist = 100

window.addEventListener('resize', function() {
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight
})


for(let i=0; i<150; i++) {
    nodes.push({
        x : Math.random() * width,
        y : Math.random() * height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1
    }) 
}


update()

function update() {
    requestAnimationFrame(update)
    // c.fillStyle = 'black'
    // c.fillStyle = '#131626'
    // c.fillStyle = '#193441'
    // c.fillStyle = '#2C3E50'
    // c.fillStyle = '#002635'
    c.fillStyle = '#001d29'
    c.fillRect (0, 0, width, height)
    for (i=0; i<nodes.length; i++) {
        let node = nodes[i];
        node.x += node.vx
        node.y += node.vy
        c.beginPath()
        c.arc(node.x, node.y, 2, 0, Math.PI * 2)
        c.fillStyle = 'white'
        c.fill();

        if(node.x > width) {
            node.x = 0
        } else if (node.x < 0) {
            node.x = width
        }

        if(node.y > height) {
            node.y = 0
        } else if (node.y < 0) {
            node.y = height
        }
    }

    for(i=0; i<nodes.length-1; i++){
        nodeA = nodes[i]
        for( j= i+1; j<nodes.length; j++){
            nodeB = nodes[j]
            
            let dx = nodeB.x - nodeA.x
            let dy = nodeB.y - nodeA.y
            let dist = Math.sqrt(dx*dx + dy*dy)
            if(dist < maxDist) {
                c.lineWidth = 1 - dist/maxDist
                c.beginPath()
                c.moveTo(nodeA.x, nodeA.y)
                c.lineTo(nodeB.x, nodeB.y)
                c.strokeStyle = 'white'
                c.stroke();
            }    
        }
    }  
}