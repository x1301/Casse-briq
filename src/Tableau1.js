

class Tableau1 extends Phaser.Scene {

    preload(){
        this.load.image('carre','assets/carre.png')
        this.load.image('ball','assets/cercle.png')

    }
    create(){
        this.detect=0
        this.ballT=new Ball(this);
        this.player=new Joueur(this,'score');
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
        this.player.vie-=1
            if(this.player.vie==0){
                alert("Perdue  !")
                this.refresh()
            }
            if(this.player.score==57){
                alert('Gagné !')
                this.refresh()
            }
            if(this.ballT.state==0){
                this.ballT.ballC.x=this.player.player.x
            }
        }
    }
    win(){
        this.player.score +=1;
    }
    refresh(){
        this.player.vie=3
        this.player.score=0
        this.ballT.Reset();
        this.player.Reset();
        document.location.reload(true)

    }

}
