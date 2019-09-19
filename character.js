/*
 * This script is an automated bot which interacts with the LOGD browser game
 */

////////////////////////INDICES FOR CHARINFO//////////////////////// 
 var levelIndex = 4;
 var hpIndex = 6;
 var turnsIndex = 8;
 var atkIndex = 10;
 var defIndex = 12;
 var goldIndex = 18;
 var expIndex = 22;
 
 class character {
	 
	 constructor() {
		 this.level = -1;
		 this.hp = -1;
	 }
	 
	 //GETTERS AND SETTERS
	 setLevel(level){
		 this.level = parseInt(level);
	 }
	 
	 setHp(hp){
		 this.hp = parseInt(hp);
	 }
	 
	 setTurns(turns) {
		 this.turns = turns;
	 }
	 
	 setAttack(attack) {
		 this.attack = attack;
	 }
	 
	 setDefense(defense) {
		 this.defense = defense;
	 }
	 
	 setGold(gold) {
		 this.gold = gold;
	 }
	 
	 setExp(exp) {
		 this.exp = exp;
	 }
	 
	 	 
	/*
	 * this method scrapes the charinfo table and updates the characters stats
     */
	updateCharInfo() {
		 var table = document.getElementsByClassName('charinfo');
		 
		 this.setLevel(parseInt(table.item(levelIndex).outerText));
		 
		 this.setHp(parseInt(table.item(hpIndex).outerText));
		 
		 this.setTurns(parseInt(table.item(turnsIndex).outerText));
		 
		 this.setAttack(parseInt(table.item(atkIndex).outerText));
		 
		 this.setDefense(parseInt(table.item(defIndex).outerText));
		 
		 this.setGold(parseInt(table.item(goldIndex).outerText));
		 
		 this.setExp(parseInt(table.item(expIndex).outerText));
	 }
 };
 
 ////////////////////////MAIN////////////////////////
 char = new character();
 
 char.updateCharInfo();
 
 