//------ Block Attack ------//
//Setting of Canvas
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

//Screen Variables
var SCREEN_HEIGHT = canvas.height;
var SCREEN_WIDTH = canvas.width;

// Delta Time
var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

//Get DeltaTime
function getDeltaTime() {
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;

	if (deltaTime > 1)
		deltaTime = 1;

	return deltaTime;
}

// ---- DO NOT EDIT ANYTHING ABOVE THIS ---- //



//Game State Variables
var STATE_MENUSCREEN = 0;
var STATE_CONTROLS = 1;
var STATE_ABOUT = 2;
var STATE_GAME = 3;
var STATE_GAMEOVER = 4;

// Starting State
var gameState = STATE_MENUSCREEN;

//Timers
var gameTimer = 0;


// Game Variables
//var HUD = new HUD();
var player1 = new Player1();
var player2 = new Player2();
var keyboard = new Keyboard();

// Run Statement
function run () {	
    context.fillStyle = "#ccc";
    context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    var deltaTime = getDeltaTime();

    
    //Game States
    switch (gameState) {
        case STATE_MENUSCREEN:
            runMainMenu(deltaTime);
            break;
		case STATE_CONTROLS:
            runControls(deltaTime);
            break;
		case STATE_ABOUT:
			runAbout(deltaTime);
			break;
        case STATE_GAME:
            runGame(deltaTime);			
            break;
        case STATE_GAMEOVER:
            runGameOver(deltaTime);
            break;
    }
}

function runMainMenu(deltaTime) {
	player1.update();
	player1.draw();
	player2.update();
	player2.draw();
		
	// load the image to use for the level tiles
	var menuBottom = document.createElement("img");
	menuBottom.src = "Menu Images/Bottom Platform Menu.png";
	
	// 
	context.drawImage(menuBottom, 0, 0);
	
	//updateMainMenu();
}

function runControls(deltaTime) {
	
}

function runAbout(deltaTime) {
		
	
}

function runGame(deltaTime) {
	
	musicInGame.unmute();
	
	background.draw();
	gameTimer += deltaTime;
	
	
	
    player.draw();

		// Intertection/ collision with objects remmber to add break; when using ().splice then specify how many to splice ().splice(i, 1)
		
		// check if any asteroids  intersects any aliens. If so, kill the asteroid
	for (var i = 0; i < asteroids.length; i++) {
		for (var j = 0; j < aliens.length; j++) {
			if (intersects(
				aliens[j].x - aliens[j].width / 2, aliens[j].y -
				aliens[j].height / 2,
				aliens[j].width, aliens[j].height,
				asteroids[i].x - asteroids[i].width / 2, asteroids[i].y - asteroids[i].height / 2,
				asteroids[i].width, asteroids[i].height) == true) {
				asteroids.splice(i, 1)
				break;
			}
		}
	}

	}

	// tests if two rectangles are intersecting.
	// Pass in the x,y coordinates, width and height of each rectangle.
	// Returns 'true' if the rectangles are intersecting
	function intersects(x1, y1, w1, h1, x2, y2, w2, h2) {
		if (y2 + h2 < y1 ||
			x2 + w2 < x1 ||
			x2 > x1 + w1 ||
			y2 > y1 + h1) {
			return false;
		}
		return true;
	}

		// Game Timer
	context.fillStyle = "white";
	context.font = "16px Arial";
	var gameTimerText = "Time Survived:  " + gameTimer.toFixed(0);
	context.fillText(gameTimerText, SCREEN_WIDTH - 300, 20);

	
	
function runGameOver(deltaTime) {
	
}

// ---- DO NOT EDIT ANYTHING BELOW THIS FRIENDS ---- //
(function () {
	var onEachFrame;
	if (window.requestAnimationFrame) {
		onEachFrame = function (cb) {
			var _cb = function () { cb(); window.requestAnimationFrame(_cb); }
			_cb();
		};
	} else if (window.mozRequestAnimationFrame) {
		onEachFrame = function (cb) {
			var _cb = function () { cb(); window.mozRequestAnimationFrame(_cb); }
			_cb();
		};
	} else {
		onEachFrame = function (cb) {
			setInterval(cb, 1000 / 60);
		}
	}

	window.onEachFrame = onEachFrame;
})();
window.onEachFrame(run);