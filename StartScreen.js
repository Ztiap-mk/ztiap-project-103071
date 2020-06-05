
var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

var grass = new Image();
var blanket = new Image()
var pizza = new Image();


function StartScreen ()
{
	grass.src = "IMG/grass.jpg";
	blanket.src = "IMG/blanket.jpg";
	pizza.src = "IMG/pizza.png";

	ctx.drawImage(grass, 0, 0, 800, 700);
	ctx.drawImage(blanket, c.width/2 - 300/2, c.height - 450, 300, 300);
	ctx.drawImage(pizza, c.width/2 - 200/2, c.height - 400, 200, 200);


	ctx.fillStyle = "white";
	ctx.font = "72px Arial";
	ctx.fillText("PIZZA DEFENCE", c.width/2 - 260, c.height - 550);

		//ctx.beginPath();
	ctx.fillStyle = "gray";
	ctx.fillRect(c.width/2 - 100, c.height - 200, 200, 70);
	ctx.stroke();

	ctx.fillStyle = "black";
	ctx.font = "32px Arial";
	ctx.fillText("Start", c.width/2 - 35, c.height - 155);



	ctx.fillStyle = "gray";
	ctx.fillRect(c.width/2 - 100, c.height - 110, 200, 50);
	ctx.stroke();

	ctx.fillStyle = "black";
	ctx.font = "28px Arial";
	ctx.fillText("Credits", c.width/2 -44, c.height - 75);



	ctx.fillStyle = "gray";
	ctx.fillRect(c.width - 250, c.height - 150, 130, 50);
	ctx.stroke();

	ctx.fillStyle = "black";
	ctx.font = "24px Arial";
	ctx.fillText("Instructions", c.width - 245, c.height - 120);
};




var mouseX = 0;
var mouseY = 0;
var num = 0;

c.addEventListener("click", function (entry) {
			
	mouseX = entry.pageX - c.offsetLeft;
	mouseY = entry.pageY - c.offsetTop;
			//console.log(mouseX);
			//console.log(mouseY);

	if (num == 0 && (mouseX >= 300 && mouseX <= 500) && (mouseY >= 500 && mouseY <= 570)){
		const game = new Game();
    	game.start();
    	num = 1;

	}

	if (num == 0 && (mouseX >= 550 && mouseX <= 680) && (mouseY >= 550 && mouseY <= 600)){

		//Okno Instructions
		ctx.fillStyle = "gray";
		ctx.fillRect(c.width - 450, c.height - 420, 400, 300);
		ctx.stroke();

		ctx.fillStyle = "black";
		ctx.font = "18px Arial";
		ctx.fillText("Instructions:", c.width - 420, c.height - 390);

		ctx.fillStyle = "black";
		ctx.font = "18px Arial";
		ctx.fillText("Cieľom hry je kliknúť na chrobákov, predtým", c.width - 420, c.height - 350);

		ctx.fillStyle = "black";
		ctx.font = "18px Arial";
		ctx.fillText("ako sa dostanú k pizzi.", c.width - 420, c.height - 330);

		ctx.fillStyle = "black";
		ctx.font = "18px Arial";
		ctx.fillText("Skóre predstavuje počet zabitých chrobákov.", c.width - 420, c.height - 300);


		//X na zatvorenie okna Instructions
		ctx.moveTo(735, 299);
		ctx.lineWidth = '1';
		ctx.lineTo(726, 290);
		ctx.stroke();

		ctx.moveTo(726, 299);
		ctx.lineTo(735, 290);
		ctx.stroke();

	}

	//obnova Startsreen
	if ((mouseX >= 726 && mouseX <= 735) && (mouseY >= 290 && mouseY <= 299))
					
		StartScreen();
			
	return false;

}, false);