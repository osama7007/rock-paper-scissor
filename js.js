
const container = document.querySelector(".container");
const winner = document.querySelector("span");
function getValue(e) {
	let btnValue = e.value;
	return btnValue;
}

function result(e) {
	let rand = Math.ceil(Math.random() * 3);
	if (rand == "1" && getValue(e) == "2") {
		container.innerHTML = ` <button style = "box-shadow: crimson 0 0 10px 1px"> <img  src="rock.jpg" ></button> <button style = "box-shadow: lightskyblue 0 0 10px 3px "><img src="papper.png" ></button>`;
		winner.innerHTML = "you win";
	} else if (rand == "1" && getValue(e) == "3") {
		container.innerHTML = ` <button style = "box-shadow: crimson 0 0 10px 1px"><img  src="rock.jpg" ></button> <button style = "box-shadow: lightskyblue 0 0 10px 3px "><img src="scissor.png" ></button>`;
		winner.innerHTML = "you lose";
	} else if (rand == "2" && getValue(e) == "1") {
		container.innerHTML = ` <button style = "box-shadow: crimson 0 0 10px 1px"><img  src="papper.png" ></button> <button style = "box-shadow: lightskyblue 0 0 10px 3px "><img src="rock.jpg" ></button>`;
		winner.innerHTML = "you lose";
	} else if (rand == "2" && getValue(e) == "3") {
		container.innerHTML = ` <button style = "box-shadow: crimson 0 0 10px 1px"><img  src="papper.png" ></button> <button style = "box-shadow: lightskyblue 0 0 10px 3px "><img src="scissor.png" ></button>`;
		winner.innerHTML = "you win";
	} else if (rand == "3" && getValue(e) == "1") {
		container.innerHTML = ` <button style = "box-shadow: crimson 0 0 10px 1px"><img  src="scissor.png" ></button> <button style = "box-shadow: lightskyblue 0 0 10px 3px "><img src="rock.jpg" ></button>`;
		winner.innerHTML = "you win";
	} else if (rand == "3" && getValue(e) == "2") {
		container.innerHTML = ` <button style = "box-shadow: crimson 0 0 10px 1px"><img  src="scissor.png" ></button> <button style = "box-shadow: lightskyblue 0 0 10px 3px "><img src="papper.png" ></button>`;
		winner.innerHTML = "you lose";
	} else if (rand == "1" && getValue(e) == "1") {
		container.innerHTML = ` <button style = "box-shadow: crimson 0 0 10px 1px"><img  src="rock.jpg" ></button> <button style = "box-shadow: lightskyblue 0 0 10px 3px "><img src="rock.jpg" ></button>`;
		winner.innerHTML = "Tie";
	} else if (rand == "2" && getValue(e) == "2") {
		container.innerHTML = ` <button style = "box-shadow: crimson 0 0 10px 1px"><img  src="papper.png" ></button> <button style = "box-shadow: lightskyblue 0 0 10px 3px "><img src="papper.png" ></button>`;
		winner.innerHTML = "Tie";
	} else if (rand == "3" && getValue(e) == "3") {
		container.innerHTML = ` <button style = "box-shadow: crimson 0 0 10px 1px"><img  src="scissor.png"" ></button> <button style = "box-shadow: lightskyblue 0 0 10px 3px "><img src="scissor.png"" ></button>`;
		winner.innerHTML = "Tie";
	}
}

function reset() {
	location.reload();
}
