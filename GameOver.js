
var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

var grass = new Image();
var blanket = new Image()
var pizza = new Image();



function Init()
{
	grass.src = "IMG/grass.jpg";
	blanket.src = "IMG/blanket.jpg";
	pizza.src = "IMG/pizza.png";
			
};

function GameOver() {
		ctx.clearRect(0, 0, 800, 700);

		ctx.drawImage(grass, 0, 0, 800, 700);
		ctx.drawImage(blanket, c.width/2 - 500/2, c.height/2 - 500/2, 500, 500);
		ctx.drawImage(pizza, c.width/2 - 400/2, c.height/2 - 400/2, 400, 400);

		ctx.fillStyle = "black";
		ctx.font = "100px Arial";
		ctx.fillText("GAME OVER", 100, 400);
		

}

Init();
