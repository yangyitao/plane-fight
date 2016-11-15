/**
 * Created by Administrator on 2016/10/13 0013.
 */
var myPlane = {
    ele: null,

    // 初始化自己的飞机
    init: function() {
        this.ele = document.createElement("div");
        this.ele.className = "myplane";

        // 将当前飞机添加到 游戏面板 中
        gameEngine.ele.appendChild(this.ele);

        // 中间位置
        var centerX = parseInt((gameEngine.ele.offsetWidth - this.ele.offsetWidth) / 2);

        this.ele.style.left = centerX + "px";

        this.startDrag(); // 支持拖拽
        var self = this;
        onkeydown = function(e){

            if (e.keyCode == 37){
                self.leftMove()
            }
            if (e.keyCode == 39){
                self.rightMove()
            }
            if (e.keyCode == 38){
                self.topMove()
            }
            if (e.keyCode == 40){
                self.bottomMove()
            }
        }
    },


    fire:function(){

        var self = this;
        this.timer = setInterval(function(){
            var x = self.ele.offsetLeft;
            var y = self.ele.offsetTop;
            new bulletLeft(x,y).move();
            new bulletRight(x,y).move();
        },500)
    },
    // 支持拖拽

    leftMove:function(){
        this.ele.style.left = this.ele.offsetLeft - 10 + 'px';
        var self = this;
        if (self.ele.style.left < 0){
            self.ele.style.left = 0;
        }
    },
    rightMove:function(){
        this.ele.style.left = this.ele.offsetLeft + 10 + 'px';
        var self = this;
        if (self.ele.offsetLeft > gameEngine.ele.offsetWidth - self.ele.offsetWidth){
            console.log('haha');
            self.ele.style.left = gameEngine.ele.offsetWidth - self.ele.offsetWidth + 'px';
        }
    },
    topMove:function(){
        this.ele.style.top = this.ele.offsetTop - 10 + 'px';
        var self = this;
        if (self.ele.style.top < 0){
            self.ele.style.top = 0;
        }
    },
    bottomMove:function(){
        this.ele.style.top = this.ele.offsetTop + 10 + 'px';
        var self = this;
        if (self.ele.style.top > gameEngine.ele.offsetHeight - self.ele.offsetHeight){
            self.ele.style.top = gameEngine.ele.offsetHeight - self.ele.offsetHeight
        }
    },
    startDrag: function() {

        var self = this;

        this.ele.onmousedown = function(e) {
            var disX = e.offsetX;
            var disY = e.offsetY;


            // 在整个页面中移动
            document.onmousemove = function(e) {

                var x = e.clientX - disX - gameEngine.ele.offsetLeft;
                var y = e.clientY - disY;

                if (x < 0) {
                    x = 0;
                }

                if (x > gameEngine.ele.offsetWidth - self.ele.offsetWidth) {
                    x = gameEngine.ele.offsetWidth - self.ele.offsetWidth;
                }


                self.ele.style.left = x + "px";
                self.ele.style.top = y + "px";
            }

            document.onmouseup = function() {
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
    }
};