class Bricks {
    constructor(Tableau1){
        this.scene=Tableau1
        let me = this
        for(let i=0;i<9;i++){
            this.brique = this.scene.physics.add.sprite(i*61, 200, "carre").setDisplaySize(60,30).setOrigin(-2.5,0)
            this.scene.physics.add.collider(this.scene.ballT.ballC,this.brique,this.destroyBricks,null,this)
        }
        for(let i=0;i<9;i++){
            this.brique =  this.scene.physics.add.sprite(i*61, 231, "carre").setDisplaySize(60,30).setOrigin(-2.5,0)
            this.scene.physics.add.collider(this.scene.ballT.ballC,this.brique,this.destroyBricks,null,this)
        }
        for(let i=0;i<9;i++){
            this.brique =  this.scene.physics.add.sprite(i*61, 262, "carre").setDisplaySize(60,30).setOrigin(-2.5,0)
            this.scene.physics.add.collider(this.scene.ballT.ballC,this.brique,this.destroyBricks,null,this)
        }
        for(let i=0;i<9;i++){
            this.brique =  this.scene.physics.add.sprite(i*61, 293, "carre").setDisplaySize(60,30).setOrigin(-2.5,0)
            this.scene.physics.add.collider(this.scene.ballT.ballC,this.brique,this.destroyBricks,null,this)
        }
        for(let i=0;i<9;i++){
            this.brique =  this.scene.physics.add.sprite(i*61, 324, "carre").setDisplaySize(60,30).setOrigin(-2.5,0)
            this.scene.physics.add.collider(this.scene.ballT.ballC,this.brique,this.destroyBricks,null,this)
        }
        this.briqueV=this.scene.physics.add.sprite(363,308,'carre').setDisplaySize(60,30).setTintFill(0x00FF00)
        this.scene.physics.add.collider(this.scene.ballT.ballC,this.briqueV,this.destroyBricks,null,this)
        this.briqueR=this.scene.physics.add.sprite(424,308,'carre').setDisplaySize(60,30).setTintFill(0xFF0000)
        this.scene.physics.add.collider(this.scene.ballT.ballC,this.briqueR,this.destroyBricks,null,this)
    }

    destroyBricks(ball,brique)
    {
        this.renvoie(brique)
        brique.destroy()
        if(brique==this.briqueV){
            this.scene.player.vie+=1
        }
        if(brique==this.briqueR){
            this.scene.player.score+=10
        }
    }
    renvoie(brique){
        this.scene.win()
        this.randoo=this.scene.ballT.ballC.y
        this.coeff=this.randoo/5
        this.coeff=this.coeff*1.5
        this.scene.ballT.ballC.setVelocityY(this.scene.ballT.ballC.body.velocity.y+this.coeff*5)
    }
}