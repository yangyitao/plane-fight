/**
 * Created by Administrator on 2016/10/13 0013.
 */
function Enemy(className,speed){

    this.id = new Date().getTime() + "" + (Math.random() * 10000);
    gameEngine.enemies[this.id] = this;
    var self = this;
    this.ele = document.createElement('div');
    if (className == 'enemy-large'){
        this.ele.className = "enemy-large";
        this.hp = 20;
    }
    if (className == 'enemy-middle'){
        this.ele.className = "enemy-middle"
        this.hp = 6;
    }
    if (className == 'enemy-small') {
        this.ele.className = "enemy-small";
        this.hp = 1;
    }

    gameEngine.ele.appendChild(this.ele);
    this.ele.style.left = Math.random()*(gameEngine.ele.offsetWidth - this.ele.offsetWidth) + 'px';
    this.ele.style.top = -this.ele.offsetHeight + 'px';

}

Enemy.prototype.move = function(speed){

    var self = this;
    this.timer = setInterval(function(){

        self.ele.style.top = self.ele.offsetTop + 10 + 'px';
        if (self.ele.offsetTop > gameEngine.ele.clientHeight){
            clearInterval(self.timer);
            gameEngine.ele.removeChild(self.ele)
            delete  gameEngine.enemies[self.id]
        }
    },speed)
}
Enemy.prototype.hurt = function(){

    this.hp--;
    console.log(this.hp)
    if (this.hp == 0){
        this.boom();
    }
}
Enemy.prototype.boom = function() {
    var self = this;

    clearInterval(this.timer); // 清除移动定时器，停止移动

     // 移除游戏引擎中保存的敌机

    if (gameEngine.enemies[self.id].ele.className == 'enemy-small'){

        var self = this;
        var i = 0;
        var dieImgs = ["plain1_die1.png", "plain1_die2.png","plain1_die3.png","plain1_die4.png"];
        var dieTimer = setInterval(function(){
            self.ele.style.background = "url(img/" + dieImgs[i] +")";
            i++;

            if (i >= dieImgs.length) {
                clearInterval(dieTimer);
                delete gameEngine.enemies[self.id];
                gameEngine.ele.removeChild(self.ele); // 移除
            }
        }, 80);
    }
    if (gameEngine.enemies[self.id].ele.className == 'enemy-middle'){

        var self = this;
        var i = 0;
        var dieImgs = ["plain2_die1.png", "plain2_die2.png","plain2_die3.png","plain2_die4.png"];
        var dieTimer = setInterval(function(){
            self.ele.style.background = "url(img/" + dieImgs[i] +")";
            i++;

            if (i >= dieImgs.length) {
                clearInterval(dieTimer);
                delete gameEngine.enemies[self.id];
                gameEngine.ele.removeChild(self.ele); // 移除
            }
        }, 80);
    }
    if (gameEngine.enemies[self.id].ele.className == 'enemy-large'){

        var self = this;
        var i = 0;
        var dieImgs = ["plain3_die1.png", "plain3_die2.png","plain3_die3.png","plain3_die4.png","plain3_die5.png","plain3_die6.png"];
        var dieTimer = setInterval(function(){
            self.ele.style.background = "url(img/" + dieImgs[i] +")";
            i++;

            if (i >= dieImgs.length) {
                clearInterval(dieTimer);
                delete gameEngine.enemies[self.id];
                gameEngine.ele.removeChild(self.ele); // 移除
            }
        }, 80);
    }




}