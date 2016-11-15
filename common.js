
// isCrash: 功能： 检测 oDiv1 和 oDiv2 这两个物体是否碰撞
//    返回值: true 代表碰撞了
//          false 就代表没有碰撞
function isCrash(oDiv1, oDiv2) {
	// 求 oDiv2 物体的中心点

	//               宽度的一半           +         左边的距离
	var centerX = oDiv2.offsetWidth / 2 + oDiv2.offsetLeft;
	//               高度的一半                                     距离顶部的距离
	var centerY = oDiv2.offsetHeight / 2 + oDiv2.offsetTop;
	
	
	// 求方块的位置
	//          第1个物体距离左边的距离  -  第2个物体宽度的一半
	var minX = oDiv1.offsetLeft - oDiv2.offsetWidth / 2;
	
	//          第1个物体距离左边的距离 + 第1个物体的宽度 + 第2个物体的一半
	var maxX = oDiv1.offsetLeft  + oDiv1.offsetWidth  + oDiv2.offsetWidth / 2;
	
	//          第1个物体距离顶部的距离  - 第2个物体高度的一半
	var minY = oDiv1.offsetTop -  oDiv2.offsetHeight / 2;
	
	//          第1个物体距离顶部的距离  + 第1个物体的高度        +      第2个物体高度的一半
	var maxY = oDiv1.offsetTop + oDiv1.offsetHeight +  oDiv2.offsetHeight / 2;
	
	
	// 判断中心点是否在  棕色的范围内
	if (centerX > minX && centerX < maxX && 
		centerY > minY && centerY < maxY) {
		
		return true; // 碰撞了！
	} else {
		return false; // 没有碰撞！
	}
}