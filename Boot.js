var BasicGame = {};

BasicGame.Boot = function (game) {this.game = game},

BasicGame.Boot.prototype = {
    preload : function () {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('firstaid', 'assets/firstaid.png');
        this.load.image('diamond', 'assets/diamond.png');
    },
    
    create: function () {
    this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = true;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.minWidth = 600;
    this.scale.minHeight = 400;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.stage.forcePortrait = true; //Force landscape in browser
    this.scale.setScreenSize(true);
    
    this.input.addPointer(); //correspond to the 1 pointer
    this.stage.backgroundColor = '#121643'; 
    this.state.start('Preloader'); //starts the Preloader.js file
}
}

    