
var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

var grass = new Image();
var blanket = new Image()
var pizza = new Image();


/*const BCK = [
	{name: 'grass', src: 'IMG/grass.jpg'},
	{name: 'blanket', src: 'IMG/blanket.jpg'},
	{name: 'pizza', src: 'IMG/pizza.png'},
]

const BUGS = [
    {name: 'beetle', src: 'IMG/beetle.png'},
    {name: 'fly', src: 'IMG/fly.png'},
    {name: 'ant', src: 'IMG/ant.png'},
    {name: 'butfly', src: 'IMG/bee.png'},
    {name: 'bee', src: 'IMG/bee.png'},
];*/


class Bug1 {
	constructor(posX, posY, vel){
		this.posX = posX;
		this.posY = posY;
		this.image = document.getElementById("ant");	//name of bug
		this.vel = vel;
		this.dir = Math.random() * 5;
		this.dx = 1 * this.vel;
		this.dy = 1 * this.vel;
		this.dx2 = 1* this.vel;
		this.dy2 = 1* this.vel; 
	}

	drw() {
		ctx.save();
		ctx.translate(this.posX, this.posY);
		ctx.drawImage(this.image, 5, 5, 60, 60);		//size of bug
		ctx.restore();
	}

	move(deltaTime) {		
		ctx.clearRect(0, 0, 800, 700);

		ctx.drawImage(grass, 0, 0, 800, 700);
		ctx.drawImage(blanket, c.width/2 - 500/2, c.height/2 - 500/2, 500, 500);
		ctx.drawImage(pizza, c.width/2 - 400/2, c.height/2 - 400/2, 400, 400);
		
		this.drw();

		if (this.posX > c.width/2 + 100) {
			this.posX -= this.dx;

			if (this.posY > c.height/2 + 100)
				this.posY -= this.dy;

			else if (this.posY < c.height/2 - 200)
					this.posY += this.dy;
				
		}
		else {
			this.dx = -this.dx;
			this.dy = -this.dy;

			this.posX -= this.dx;
			this.posY += this.dy; 
		}


		if (this.posX < c.width/2 - 400/2) {
				this.posX += this.dx2;

			if (this.posY > c.height/2 + 100)
				this.posY -= this.dy2;

			else if (this.posY < c.height/2 - 400/2)
					this.posY += this.dy2;
		}
		else {
			this.dx2 = -this.dx2;
			this.dy2 = -this.dy2;

			this.posX += this.dx2;
			this.posY += this.dy2;
		}	

	}
	
};

		
function Init()
{
	grass.src = "IMG/grass.jpg";
	blanket.src = "IMG/blanket.jpg";
	pizza.src = "IMG/pizza.png";
			
};

class Game {
	time = Date.now();

	obj = [];

	async start() {
		for (let i = 0; i < 10; i++) {
			var x = Math.random() * (c.width + 80);
			var y = Math.random() * (c.height + 80);

			if ((x < c.width/2 - 400/2) || (x > c.width/2 + 100)){
            	this.obj.push(new Bug1(x, y, 1));
        	}
        	else {
        		x = Math.random() * (c.width + 80);
				y = Math.random() * (c.height + 80);
        	}

        	/*var song = loadSound("Audio/soudtrack.mp3", loaded);
        	song.setVolume(0.2);*/
    	}
    	this.gameLoop();
	}

	gameLoop() {
		this.time = Date.now();
        this.step();
	}

	step() {
		const now = Date.now();
		const deltaTime = (now - this.time) / 100;

		this.time = now;
		this.move(deltaTime);
		this.render();

		requestAnimationFrame(() => this.step());
	}

	move(deltaTime) {
		this.obj.forEach((beet) => {
            beet.move(deltaTime);
        });
	}

	render() {
		ctx.clearRect(0, 0, 800, 700);

		ctx.drawImage(grass, 0, 0, 800, 700);
		ctx.drawImage(blanket, c.width/2 - 500/2, c.height/2 - 500/2, 500, 500);
		ctx.drawImage(pizza, c.width/2 - 400/2, c.height/2 - 400/2, 400, 400);

		this.obj.forEach((beet) => {
            beet.drw();
        });

	}

}

Init();

GameOver();

