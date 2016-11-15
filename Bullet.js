/**
 * Created by Administrator on 2016/10/13 0013.
 */
function bulletLeft(x,y){

    this.id = new Date().getTime() + '' + (Math.random() * 10000);
    gameEngine.bulletsLeft[this.id] = this;
    this.ele = document.createElement('div');
    this.ele.className = 'bullet';

    gameEngine.ele.appendChild(this.ele);

    this.ele.style.left = x + (this.ele.offsetWidth / 2) + 8 + 'px';
    this.ele.style.top = y + 'px';


}

function bulletRight(x,y){

    this.id = new Date().getTime() + '' + (Math.random() * 10000);
    gameEngine.bulletsRight[this.id] = this;
    this.ele = document.createElement('div');
    this.ele.className = 'bullet';

    gameEngine.ele.appendChild(this.ele);

    this.ele.style.left = x + 78 + 'px';
    this.ele.style.top = y + 'px';

}
bulletLeft.prototype.move = function(){

    var self = this;
    var timer = setInterval(function(){

        self.ele.style.top = self.ele.offsetTop - 10  + 'px';
        if (self.ele.offsetTop < 0){

            gameEngine.ele.removeChild(self.ele)
            clearInterval(timer)
            delete  gameEngine.bulletsLeft[self.id];
        }
    },30)
}
bulletRight.prototype.move = function(){

    var self = this;
    var timer = setInterval(function(){

        self.ele.style.top = self.ele.offsetTop - 10  + 'px';
        if (self.ele.offsetTop < 0){

            gameEngine.ele.removeChild(self.ele)
            clearInterval(timer)
            delete  gameEngine.bulletsRight[self.id];
        }
    },30)
}
bulletLeft.prototype.boom = function() {

    var self = this;

    clearInterval(this.timer); // 停止移动

    delete gameEngine.bulletsLeft[self.id]; // 移除游戏引起中的子弹子弹


    self.ele.className = "bullet-die"; // 改变子弹大小

    // 子弹爆炸的图片
    var dieImgs = ["die1.png", "die2.png"];
    var i = 0;
    var dieTimer = setInterval(function() {

        self.ele.style.background = "url(img/"+dieImgs[i]+")";
        i++;

        if (i >= dieImgs.length) {
            clearInterval(dieTimer); // 清除爆炸图片更新定时器

            // 移除子弹
            gameEngine.ele.removeChild(self.ele);
        }
    }, 50);

}
bulletRight.prototype.boom = function() {

    var self = this;

    clearInterval(this.timer); // 停止移动

    delete gameEngine.bulletsRight[self.id]; // 移除游戏引起中的子弹子弹


    self.ele.className = "bullet-die"; // 改变子弹大小

    // 子弹爆炸的图片
    var dieImgs = ["die1.png", "die2.png"];
    var i = 0;
    var dieTimer = setInterval(function() {

        self.ele.style.background = "url(img/"+dieImgs[i]+")";
        i++;

        if (i >= dieImgs.length) {
            clearInterval(dieTimer); // 清除爆炸图片更新定时器

            // 移除子弹
            gameEngine.ele.removeChild(self.ele);
        }
    }, 50);

}