subl// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

///////// Player Function //////////////

// Needs handle input!

var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

// Player Update Function:
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Player Render Function
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

////// Game Control Input ///////

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        80: 'pause',
        82: 'restart'
    };

// Player handle input:
player.prototype.handleInput = function(key) {
    switch(key) {
        case 'up':
            if (this.y > 0 && !game.pause){
                this.y -= 83;
            }
            break;
        case 'down':
            if (this.y < 505 && !game.paused){
                this.y += 83;
            }
            break;
        case 'right':
            if (this.x > 0 && !game.paused){
                this.x -= 101;
            }
            break;
        case 'left':
            if (this.x < 606 && !game.paused){
                this.x += 101;
            }
            break;
        case 'pause':
            game.togglePause();
            break;
        case 'restart':
            game.gameReset();
            break;
    }
};