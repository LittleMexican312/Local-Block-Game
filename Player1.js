var Player1 = function() {
	this.image = document.createElement("img");
	
	this.position = new Vector2();
	this.position.set(SCREEN_WIDTH/2, SCREEN_HEIGHT/2);
	
	this.width = 32;
	this.height = 32;
	
	this.image.src = "Player Images/Player1.png";
		
	this.velocity = new Vector2();
	
	this.rotation = 0;
	
	this.cooldownTimer = 0;
	
};

var positionX = 200;
var positionY = 200;

Player1.prototype.update = function(deltaTime)
{
	var left = false;
	var right = false;
	var up = false;
	var down = false;
	var jumping = false;
	var PLAYER_SPEED = 2;

//Check if Key is Down
	if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true)
	{
		left = true;
	}
		
	if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true)
	{
		right = true;
	}
	if(keyboard.isKeyDown(keyboard.KEY_UP) == true)
	{
		up = true;
		jumping = true;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_DOWN) == true)
	{
		down = true;
	}

//Add Player1 Speed
	if (left == true) {
		this.position.x -= PLAYER_SPEED;
	}
	if (right == true) {
		this.position.x += PLAYER_SPEED;
	}
	if (up == true) {
		jumping = true;
		this.position.y -= PLAYER_SPEED;
	}
	if (down == true && player1.position.y <= SCREEN_HEIGHT - 21 ) {
		this.position.y += PLAYER_SPEED;
	}
		
	
	//Player1 Position Updates
    if (player1.position.x >= SCREEN_WIDTH - player1.width/2) {

        player1.position.x -= 2; 

    }

    if (player1.position.x <= 0 + player1.width/2) {

        player1.position.x += 2; 

    }  

    if (player1.position.y >= SCREEN_HEIGHT - 56) {

        player1.position.y -= 2.7;
		down = false; 

    }

    if (player1.position.y <= 0 + player1.height/2) {

        player1.position.y += 3; 

    }
}
	
Player1.prototype.draw = function()
{
	context.save();
	context.translate(this.position.x, this.position.y);
	context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}