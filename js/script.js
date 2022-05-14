document.querySelectorAll('button').forEach(button=>{
	button.addEventListener('click',()=>{
		playGame(button.innerText);
	})
})
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
	function displayResults(argPlayerMove,argComputerMove){
		console.log(argComputerMove);
		const moves = ['Kamień','Papier','Nożyce'];
		printMessage(`Twój ruch to: ${argPlayerMove}`);
		printMessage(`Ruch komputera to: ${moves[argComputerMove]}`);
		if(argPlayerMove==moves[argComputerMove]){
			printMessage('Remis');
		}else if(argPlayerMove == "Kamień" && moves[argComputerMove] == "Nożyce"){
			printMessage('Wygrana');
		}else if(argPlayerMove == "Nożyce" && moves[argComputerMove] == "Papier"){
			printMessage('Wygrana');
		}else if(argPlayerMove=="Papier" && moves[argComputerMove] == "Kamień"){
			printMessage('Wygrana');
		}else if(argPlayerMove>=1 && argPlayerMove<=3){
			printMessage('Wynik nieznany');
		}else{
			printMessage('Przegrana');
		}
	}
		displayResults(playerInput,Math.floor(Math.random() * 3));		
}
