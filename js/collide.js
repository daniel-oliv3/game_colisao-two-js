function blockRect(r1,r2){
	//r1 -> bloqueado
	//r2 -> parede
	//catetos; armazenam a distância entre os retângulos
	var catX = r1.centerX() - r2.centerX();
	var catY = r1.centerY() - r2.centerY();
	
	//soma das metades
	var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
	var sumHalfHeight = r1.halfHeight() + r2.halfHeight();
	
	if(Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight){
		//r2.visible = false;
		//setTimeout(function(){
		//	r2.visible = true;
		//},1000);
		var overlapX = sumHalfWidth - Math.abs(catX);
		var overlapY = sumHalfHeight - Math.abs(catY);
		
		if(overlapX >= overlapY){//colisão por cima ou por baixo
			if(catY > 0){//por cima
				r1.posY += overlapY;
			} else {
				r1.posY -= overlapY;
			}
		} else {//colisão pela esquerda ou direita
			if(catX > 0){//colisão pela esquerda
				r1.posX += overlapX;
			} else {
				r1.posX -= overlapX;
			}
		}
	}
}