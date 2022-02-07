

class Tableau1 extends Phaser.Scene {

    preload(){
        this.load.image('carre','assets/carre.png')
        this.load.image('ball','assets/cercle.png')

    }
    create(){
        this.detect=0
        this.ballT=new Ball(this);
        this.player=new Joueur(this);
        this.wall=new Walls(this);
        this.keyboard=new Keyboard(this);
        this.brick=new Bricks(this);
    }

    update(){

        this.player.bord();
        if(this.ballT.ballC.y>gameConfig.height){
            console.log('oui')
        this.ballT.Reset();
        this.player.Reset();
        }
    }
    win(Joueur){
        this.player.score ++;
    }
}
