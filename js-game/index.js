const canvas = document.querySelector('canvas');
const cx = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

cx.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7
const background = new Sprite({
    position:{
        x:0,
        y:0
    },
    imgSrc: './assets/background.png'
})

const player = new Fighter({
    position:{
        x:10,
        y:0
    },
    velocity:{
        x:0,
        y:10
    },
    offset:{
        x:0,
        y:0
    }
})

const enemy = new Fighter({
    position:{
        x:700,
        y:100
    },
    velocity:{
        x:0,
        y:10
    },
    color: 'blue',
    offset:{
        x:-50,
        y: 0
    }
})

const keys ={
    a:{
        pressed:false
    },
    d:{
        pressed:false
    },
    w:{
        pressed:false
    },
    ArrowRight:{
        pressed:false
    },
    ArrowLeft:{
        pressed:false
    },
    ArrowUp:{
        pressed:false
    }
}
let lastKey

decreaseTimer()

function animation () {
    window.requestAnimationFrame(animation)
    cx.fillStyle='black'
    cx.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    player.update()
    enemy.update()
    player.velocity.x = 0
    enemy.velocity.x = 0

    //player move
    if(keys.a.pressed && player.lastKey === 'a'){
        player.velocity.x = -5
    } else if (keys.d.pressed && player.lastKey === 'd'){
        player.velocity.x = 5
    }

    //enemy move
    if(keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft'){
        enemy.velocity.x = -5
    } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight'){
        enemy.velocity.x = 5
    }

    //colisao
    if(rectangleCollision({
        rectangle1: player,
        rectangle2: enemy
    }) &&
        player.isAttacking ){
    player.isAttacking = false
        enemy.health -= 20
        document.querySelector('#himBar').style.width = enemy.health + '%'
    }


    if(rectangleCollision({
        rectangle1: enemy,
        rectangle2: player
    }) &&
        enemy.isAttacking ){
    enemy.isAttacking = false
    player.health -= 20
    document.querySelector('#yourBar').style.width = player.health + '%'
    } 

    if (enemy.health<=0 || player.health <=0){
        getWinner({player, enemy, timerId})
    }
}

animation()

window.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'd':
            keys.d.pressed = true
            player.lastKey = 'd'
            break
        
        case 'a':
            keys.a.pressed = true
            player.lastKey = 'a'
            break
        case 'w':
            player.velocity.y = -20
            break
        case ' ':
            player.attack()
            break

            case 'ArrowRight':
                keys.ArrowRight.pressed = true
                enemy.lastKey = 'ArrowRight'
                break
            
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = true
                enemy.lastKey = 'ArrowLeft'
                break
            case 'ArrowUp':
                enemy.velocity.y = -20
                break
            case 'ArrowDown':
                enemy.attack()
                break

}
})

window.addEventListener('keyup', (event) => {
    switch(event.key){
        case 'd':
            keys.d.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 'w':
            keys.w.pressed = false
            break
    }
//enemy keys
    switch(event.key){
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
            break
    }
})