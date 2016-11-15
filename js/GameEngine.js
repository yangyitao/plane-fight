
var gameEngine = {

	ele:null,
	enemies:{},
	bulletsLeft:{},
	bulletsRight:{},
	start: function() {
		this.ele = document.getElementById("main_body"),
		myPlane.init();
		myPlane.fire();
		this.createEnemy();
		this.crashListen();
	},
	crashListen:function(){

		setInterval(function() {

			// 遍历所有的敌机
			for (var i in gameEngine.enemies) {
				var enemy = gameEngine.enemies[i]; // 当前敌机

				// 遍历所有子弹
				for (var j in gameEngine.bulletsLeft) {
					var bullet = gameEngine.bulletsLeft[j];

					// 检测子弹有没有打中飞机
					if (isCrash(enemy.ele, bullet.ele)) {

						enemy.hurt();
						bullet.boom();
					}
				}
				for (var j in gameEngine.bulletsRight) {
					var bullet = gameEngine.bulletsRight[j];

					// 检测子弹有没有打中飞机
					if (isCrash(enemy.ele, bullet.ele)) {

						enemy.hurt();
						bullet.boom();
					}
				}

				if (isCrash(myPlane.ele,enemy.ele)){

					alert('Game Over!')
					window.location.reload();
				}
			}
		}, 30);
	},

	createEnemy:function (){

		setInterval(createLargeEnemy,15000)
		function createLargeEnemy(){
			var className = 'enemy-large'
			var speed = 200
			new Enemy(className).move(speed)
		}
		setInterval(createMiddleEnemy,4000)
		function createMiddleEnemy(){
			var className = 'enemy-middle'
			var speed = 100
			new Enemy(className).move(speed)
		}
		setInterval(createSmallEnemy,2000)
		function createSmallEnemy(){
			var className = 'enemy-small'
			var speed = 30
			new Enemy(className).move(speed)
		}

	}
}

