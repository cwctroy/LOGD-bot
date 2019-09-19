class gameState {
	constructor(){
		this.location;
	}
	
	updateLocation(){
	this.location = document.querySelector('.pagetitle').textContent;
	}
	
	saveState(){
		window.localStorage.setItem('gameState', JSON.stringify(this));
	}
}