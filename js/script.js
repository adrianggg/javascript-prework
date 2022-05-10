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
function getMoveName(e){
	if(e == '1'){
		return 'kamień';
	}else if(e =="2"){
		return "papier";
	}else if(e == "3"){
		return "nożyce";
	}
}
function displayResults(argComputerMove,argPlayerMove){
	if(argPlayerMove==argComputerMove){
		printMessage('Remis');
	}else if(argPlayerMove == "kamień" && argComputerMove == "nożyce"){
		printMessage('Wygrana');
	}else if(argPlayerMove == "nożyce" && argComputerMove == "papier"){
		printMessage('Wygrana');
	}else if(argPlayerMove=="papier" && argComputerMove == "kamień"){
		printMessage('Wygrana');
	}else if(argPlayerMove>=1 && argPlayerMove<=3){
		printMessage('Przegrałeś');
	}else{
		printMessage('Wynik nieznany');
	}
}
playerMove = getMoveName(playerInput);
computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));
printMessage('Twój ruch to: ' + playerMove);
printMessage('Ruch komputera to: ' + computerMove);
displayResults(playerMove,computerMove);
