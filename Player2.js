var Player2 = function() {
	this.image = document.createElement("img");
	
	this.position = new Vector2();
	this.position.set(SCREEN_WIDTH/2, SCREEN_HEIGHT/2);
	
	this.width = 32;
	this.height = 32;
	
	this.image.src = "Player Images/Player2.png";
		
	this.velocity = new Vector2();
	
	this.rotation = 0;
	
	this.cooldownTimer = 0;
	
};

var positionX = 200;
var positionY = 200;

Player2.prototype.update = function(deltaTime)
{
	var left = false;
	var right = false;
	var up = false;
	var down = false;
	var jumping = false;
	var PLAYER_SPEED = 2;

//Check if Key is Down
	if(keyboard.isKeyDown(keyboard.KEY_A) == true)
	{
		left = true;
	}
		
	if(keyboard.isKeyDown(keyboard.KEY_D) == true) 
	{
		right = true;
	}
	if(keyboard.isKeyDown(keyboard.KEY_W) == true) 
	{
		up = true;
		jumping = true;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_S) == true)
	{
		down = true;
	}

//Add Player2 Speed
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
	if (down == true && player2.position.y <= SCREEN_HEIGHT - 21 ) {
		this.position.y += PLAYER_SPEED;
	}
		
	
	//Player2 Position Updates
    if (player2.position.x >= SCREEN_WIDTH - player2.width/2) {

        player2.position.x -= 2; 

    }

    if (player2.position.x <= 0 + player2.width/2) {

        player2.position.x += 2; 

    }  

    if (player2.position.y >= SCREEN_HEIGHT - 56) {

        player2.position.y -= 2.7;
		down = false; 

    }

    if (player2.position.y <= 0 + player2.height/2) {

        player2.position.y += 3; 

    }
}
	
Player2.prototype.draw = function()
{
	context.save();
	context.translate(this.position.x, this.position.y);
	context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}