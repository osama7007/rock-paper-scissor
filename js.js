const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const winner = document.querySelector("span");
const container = document.querySelector(".container");

function result(e) {
	let rand = Math.ceil(Math.random() * 3);
	function getValue() {
		let btnValue = e.value;
		return btnValue;
	}
	if (rand == "1" && getValue() == "2") {
		console.log("you win");
	}

	if (rand == "1" && getValue() == "2") {
		container.innerHTML = ` <button style = "border : 3px solid red"><img  src="rock.png" ></button> <button style = "border : 3px solid blue "><img src="paper.jpg" ></button>`;
		console.log("random : " + rand + "  /   you :" + getValue() + "  winner");

		winner.innerHTML = "you win";
	} else if (rand == "1" && getValue() == "3") {
		container.innerHTML = ` <button style = "border : 3px solid red"><img  src="rock.png" ></button> <button style = "border : 3px solid blue "><img src="scissor.png" ></button>`;
		winner.innerHTML = "you lose";
		console.log("random : " + rand + "  /   you :" + getValue() + "   loser");
	} else if (rand == "2" && getValue() == "1") {
		container.innerHTML = ` <button style = "border : 3px solid red"><img  src="paper.jpg" ></button> <button style = "border : 3px solid blue "><img src="rock.png" ></button>`;
		winner.innerHTML = "you lose";
		console.log("random : " + rand + "  /   you :" + getValue() + "  loser");
	} else if (rand == "2" && getValue() == "3") {
		container.innerHTML = ` <button style = "border : 3px solid red"><img  src="paper.jpg" ></button> <button style = "border : 3px solid blue "><img src="scissor.png" ></button>`;
		console.log("random : " + rand + "  /   you :" + getValue() + "  winner");

		winner.innerHTML = "you win";
	} else if (rand == "3" && getValue() == "1") {
		container.innerHTML = ` <button style = "border : 3px solid red"><img  src="scissor.png" ></button> <button style = "border : 3px solid blue "><img src="rock.png" ></button>`;
		console.log("random : " + rand + "  /   you :" + getValue() + "  winner");

		winner.innerHTML = "you win";
	} else if (rand == "3" && getValue() == "2") {
		container.innerHTML = ` <button style = "border : 3px solid red"><img  src="scissor.png" ></button> <button style = "border : 3px solid blue "><img src="paper.jpg" ></button>`;
		console.log("random : " + rand + "  /   you :" + getValue() + "  loser");
		winner.innerHTML = "you lose";
	} else if (rand == "1" && getValue() == "1") {
		console.log("random : " + rand + "  /   you :" + getValue() + "  tie");
		container.innerHTML = ` <button style = "border : 3px solid red"><img  src="rock.png" ></button> <button style = "border : 3px solid blue "><img src="rock.png" ></button>`;
		winner.innerHTML = "Tie";
	} else if (rand == "2" && getValue() == "2") {
		console.log("random : " + rand + "  /   you :" + getValue() + "  tie");
		container.innerHTML = ` <button style = "border : 3px solid red"><img  src="paper.jpg" ></button> <button style = "border : 3px solid blue "><img src="paper.jpg" ></button>`;
		winner.innerHTML = "Tie";
	} else if (rand == "3" && getValue() == "3") {
		console.log("random : " + rand + "  /   you :" + getValue() + "  tie");
		container.innerHTML = ` <button style = "border : 3px solid red"><img  src="scissor.png"" ></button> <button style = "border : 3px solid blue "><img src="scissor.png"" ></button>`;
		winner.innerHTML = "Tie";
	}
}

function reset() {
	location.reload();
}
