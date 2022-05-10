'use strict'
document.getElementById('play-rock').addEventListener('click',()=>{
	playGame("1");
});
document.getElementById('play-paper').addEventListener('click',()=>{
	playGame("2");
});
document.getElementById('play-scissors').addEventListener('click',()=>{
	playGame("3");
});

function playGame(playerInput){
	clearMessages();
	function printMessage(msg){
		let div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	}
	function clearMessages(){
		document.getElementById('messages').innerHTML = '';
	}
	function getMoveName(e){
		if(e == '1'){
			return 'kamień';
		}else if(e =="2"){
			return "papier";
		}else if(e == "3"){
			return "nożyce";
		}
	}
	function displayResults(argPlayerMove,argComputerMove){
		if(argPlayerMove==argComputerMove){
			printMessage('Remis');
		}else if(argPlayerMove == "kamień" && argComputerMove == "nożyce"){
			printMessage('Wygrana');
		}else if(argPlayerMove == "nożyce" && argComputerMove == "papier"){
			printMessage('Wygrana');
		}else if(argPlayerMove=="papier" && argComputerMove == "kamień"){
			printMessage('Wygrana');
		}else if(argPlayerMove>=1 && argPlayerMove<=3){
			printMessage('Wynik nieznany');
		}else{
			printMessage('Przegrana');
		}
	}
	
	let computerMove = "nieznany ruch";
	let playerMove = 'nieznany ruch';
	playerMove = getMoveName(playerInput);
	computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));
	printMessage('Twój ruch to: ' + playerMove);
	printMessage('Ruch komputera to: ' + computerMove);
	displayResults(playerMove,computerMove);
		
}
