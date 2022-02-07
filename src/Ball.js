class Ball {
    constructor(Tableau1) {
        this.lock=0
        this.state=0
        this.scene = Tableau1
        this.ballC = this.scene.physics.add.sprite(gameConfig.width / 2, 680, 'ball').setBounce(1,1)
        this.ballC.setDisplaySize(20,20)
    }

    Reset() {
        this.ballC.x = gameConfig.width / 2
        this.ballC.y = this.scene.player.player.y-20;
        this.ballC.setVelocityX(0);
        this.dm=0
        this.ballC.setVelocityY(0);
        this.lock=0
    }

    launch(){
        if(this.lock==0){
        this.dm=1;
        this.lock=1;
        this.ballC.setVelocityY(-500)
            console.log('launch')
        }


    }
}
