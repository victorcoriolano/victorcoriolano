class Sprite {
    constructor({position, imgSrc}) {
        this.position = position
        this.width = 50
        this.height = 150
        this.image = new Image()
        this.image.src = imgSrc

    }
    render(){
        cx.drawImage(this.image, this.position.x, this.position.y)
    }
    update(){
    this.render()
    }
}

class Fighter {
    constructor({position, velocity, color = 'red', offset }) {
        this.position = position
        this.velocity = velocity
        this.width = 50
        this.height = 150
        this.lastKey
        this.health = 100
        this.attackBox ={
            position:{
                x: this.position.x,
                y: this.position.y
            },
            offset,
            width:100,
            height:50
        }
        this.color = color
        this.isAttacking
    }
    render(){
        cx.fillStyle = this.color
        cx.fillRect(this.position.x, this.position.y, this.width, this.height)

    //ataque
        if(this.isAttacking){
        cx.fillStyle = 'green'
        cx.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, 
            this.attackBox.height)
        }
    }
    update(){
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x
        this.attackBox.position.y = this.position.y

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if(this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else this.velocity.y += gravity

        this.render()
    }

    attack(){
        this.isAttacking = true
        setTimeout(()=>{
            this.isAttacking = false
        }, 100)
    }
}