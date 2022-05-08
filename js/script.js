function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
let computerMove = "kamień";
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';
function move(e){
	if(e == '1'){
		return 'kamień';
	}else if(e =="2"){
		return "papier";
	}else if(e == "3"){
		return "nożyce";
	}
	//Wydaje mi się ze jeszcze mozna by to ulepszyc o wersje switch
}
playerMove = move(playerInput);
computerMove = move(Math.floor(Math.random() * 3 + 1));
printMessage('Twój ruch to: ' + playerMove);
printMessage('Ruch komputera to: ' + computerMove);
if(playerMove==computerMove){
	printMessage('Remis');
}else if(playerMove == "kamień" && computerMove == "nożyce"){
	printMessage('Wygrana');
}else if(playerMove == "nożyce" && computerMove == "papier"){
	printMessage('Wygrana');
}else if(playerMove=="papier" && computerMove == "kamień"){
	printMessage('Wygrana');
}else if(playerMove>=1 && playerMove<=3){
	printMessage('Przegrałeś');
}else{
	printMessage('Wynik nieznany');
}
