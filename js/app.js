/////// Setup Variables: ///////
// game = new Game();

// var Game = function () {
//     this.paused = false;
//     this.gameOn = false;
//     this.storyIndex = 0;
// }


///////// Player Function //////////////

// Needs handle input!

var Player = function() {
    // Load player sprite:
    this.sprite = 'images/char-boy.png';
    // Set player x position:
    this.x = 202;
    // Set player y position:
    this.y = 404;
    //Set player initial score to 0:
    this.score = 0;
};

// Player Update Function:
Player.prototype.update = function(dt) {

    // Check to see if player has had collision with enemy bug, reset if true.
    for (var bug in allEnemies) {
        // If 'hitboxes' of player and bug collide - reset!
        if (this.x < allEnemies[bug].x + 90 && this.x + 65 > allEnemies[bug].x + 2 && this.y + 135 > allEnemies[bug].y + 142 && this.y + 65 < allEnemies[bug].y + 79) {
            // Take 10 off score:
            this.score = -10;
            // Reset player to x = 202;
            this.x = 202;
            // Reset player to y = 404;
            this.y = 404;
            // Display message in console:
            console.log("The bug omnomnom'd you!");
            // Set update velocity:
            //this.x += this.velocity * dt;
        }
    }
    
    // If player makes it to water (y = 0), update score and reset.
    if (this.y <= 0) {
        // Add 5 to score:
        this.score += 5;
        // Update player loc to x = 202;
        this.x = 202;
        // Update player loc to y = 404;
        this.y = 404;
        // Print success message:
        console.log("I struck water me hearties!");
    }

    // Score display code:
    ctx.clearRect(0, 0, 250, 43);
    ctx.fillStyle = 'black';
    ctx.font = '30pt Arial';
    ctx.fillText("Score :" + this.score, 0, 40);
};

// Render player on the screen:
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

////// Enemy Objects ///////

var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
    this.x = Math.random() * 505;
    this.y = 63 + (Math.round(Math.random() * 2) * 83);
    this.velocity = 100 + Math.floor(Math.random() * 150);
};

// Update enemies position depending on dt:
Enemy.prototype.update = function(dt) {
    // if (!game.paused){
    //     this.x = this.x + (dt * this.rate);
    // }
    this.x += this.velocity * dt;
    // When bug goes of the screen, respawn on left of screen:
    if (this.x >= 505) {
        this.x = -101;
        this.y = 63 + (Math.round(Math.random() * 2) * 83);
    }
};

// // Randomise start location of enemy:
// Enemy.prototype.reset = function() {
//     this.x = 0 - math.random() * 200;
// }

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

////// Game Control Input ///////

// Player handle input:
Player.prototype.handleInput = function(key) {
    switch(key) {
        case 'up':
            if (this.y >= 0 ){
                this.y -= 83;
            }
            break;
        case 'down':
            if (this.y < 404 ){
                this.y += 83;
            }
            break;
        case 'right':
            if (this.x > 0){
                this.x -= 101;
            }
            break;
        case 'left':
            if (this.x < 404){
                this.x += 101;
            }
            break;
    }
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        39: 'left',
        38: 'up',
        37: 'right',
        40: 'down',
        80: 'pause',
        82: 'restart'
    };

    player.handleInput(allowedKeys[e.keyCode]);

});

/////// Instantiate objects ///////

// Create all enemies for the game:
var allEnemies = [];

for (var index = 0; index < 6; index++) {
    var enemyObj = new Enemy();
    allEnemies.push(enemyObj);
};

var player = new Player();

// /////// Item Classes ///////

// // Create class for items to be picked up by player:
// Item.prototype.drop = function () {
//     this.visible = true;
//     player.carryItem = false;
//     this.x = player.x;
//     this.y = player.y;
// };

// // Reset item on board game to be picked up:
// Item.prototype.reset = function() {
//     this.y = Math.floor(Math.random() * 5) * 101;
//     this.x = Math.floor(Math.random() * 5) * 83 - 11;
//     this.visible = true;
// };

// // Hide item once picked up:
// Item.prototype.hide = function() {
//     this.visible = false;
//     player.carryItem = false;
// };

// // Draw the item on the game board:
// Item.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };



// // Global Variables:
// var allEnemies = [];
// var player;
// var gem;
// var allGems;
// var possibleGems;
// var highestScore = 0;
// var score = 0;
// var div = document.getElementsById('score-board');
// var audio = new Audio;

// // Open Modal 
// window.onload = function() {
//     window.location.href = "#openModal";
// }
