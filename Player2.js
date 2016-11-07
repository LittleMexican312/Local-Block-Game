var Player2 = function() {
	this.image = document.createElement("img");
	
	this.position = new Vector2();
	this.position.set(SCREEN_WIDTH/2, SCREEN_HEIGHT/2);
	
	this.width = 32;
	this.height = 32;
	
	this.image.src = "Player Images/Player2.png";
		
	this.velocity = new Vector2();
	
	this.rotation = 0;
	
	this.falling = true;
	this.jumping = false;
	
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
	var jump = false;
	var PLAYER_SPEED = 8;

	var wasleft = this.velocity.x < 0;
	var wasright = this.velocity.x > 0;
	var falling = this.falling;
	var ddx = 0; // acceleration
	var ddy = GRAVITY;
	var gravity = 0.3;

	this.cooldownTimer -= deltaTime;

//Check if Key is Down
	if(keyboard.isKeyDown(keyboard.KEY_A) == true)
	{
		left = true;
	}
		
	if(keyboard.isKeyDown(keyboard.KEY_D) == true) 
	{
		right = true;
	}
	if(keyboard.isKeyDown(keyboard.KEY_W) == true && this.cooldownTimer <= 0) 
	{
		up = true;
		jumping = true;
		player2.velocity.y = 8 * 2;
		this.cooldownTimer += 1;
	}
	
	if(keyboard.isKeyDown(keyboard.KEY_S) == true)
	{
		down = true;
	}


	player2.velocity.y += gravity;
	
	if (left)
		ddx = ddx - ACCEL; // player wants to go left
	else if (wasleft)
		ddx = ddx + FRICTION; // player was going left, but not any more
		
	if (right)
		ddx = ddx + ACCEL; // player wants to go right
	else if (wasright)
		ddx = ddx - FRICTION; // player was going right, but not any more
		
	if (jump && !this.jumping && !falling)
	{
		ddy = ddy - JUMP; // apply an instantaneous (large) vertical impulse
		this.jumping = true;
	}
	

	// calculate the new position and velocity:
	this.position.y = Math.floor(this.position.y + (deltaTime * this.velocity.y));
	this.position.x = Math.floor(this.position.x + (deltaTime * this.velocity.x));
	
	this.velocity.x = bound(this.velocity.x + (deltaTime * ddx), -MAXDX, MAXDX);
	this.velocity.y = bound(this.velocity.y + (deltaTime * ddy), -MAXDY, MAXDY);
	
	
	if ((wasleft && (this.velocity.x > 0)) ||
		(wasright && (this.velocity.x < 0)))
		{
			// clamp at zero to prevent friction from making us jiggle side to side
			this.velocity.x = 0;
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

        player2.position.x = SCREEN_WIDTH - player2.width/2; 

    }

    if (player2.position.x <= 0 + player2.width/2) {

        player2.position.x = 0 + player2.width/2; 

    } 
	
	 if (player2.position.y >= SCREEN_HEIGHT - player2.height/2) {

        player2.position.y = SCREEN_HEIGHT - player2.height/2;
		jumping = false; 

    } 
	
	if (player2.position.y <= 0 + player2.height/2) {

        player2.position.y = 0 + player2.height/2; 

    } 


}
	
Player2.prototype.draw = function()
{
	context.save();
	context.translate(this.position.x, this.position.y);
	context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
}