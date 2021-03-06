BasicGame.Menu = function(game) {
this.startBG;
this.goNext;
this.text;
this.counter = 0;
this.patrick;
this.fadein;
    
}

BasicGame.Menu.prototype = {
    
    create: function () {
        //this is where all your assets need to be called to be in the main menu

        startBG = this.add.image(0,0, 'background');
        goNext = this.add.image(120,710, 'Next'); 
        patrick = this.add.sprite(911, 192,'Patrick');
        patrick.alpha = 0;
        text = this.add.text(0,this.world.centerY+100, '', { font: "24px Helvetica", wordWrap: true, wordWrapWidth: 500, align: 'left',fill: '#ffffff'});
        text.setText("Police received several calls from a quiet neighborhood in Buckingham, Calarana late on a Friday evening.");
        
    },
    update: function () {
        goNext.inputEnabled = true;
        goNext.events.onInputDown.add(this.enableClick,this);
        
            if (this.counter === 1)
             {
            text.setText(" IT Consultant, Patrick Evans lived at the Fine Tree apartments while he worked on a project in Buckingham. Neighbors do not recall having seen Patrick leave his home the entire day. A woman entered his apartment at approximately 7:18 P.M. and an argument ensued.");
            this.fadein = this.add.tween(patrick).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 0, false);
             }
            if (this.counter === 2)
        {
            text.setText("After a brief, loud argument, neighbors heard a gunshot, and the woman left the scene.");
        }
            if (this.counter === 3)
        {
            text.setText("Patrick was found dead, lying face-down in his living room.");
        }
            if (this.counter === 4)
        {
            text.setText("...What happened?");
        }
            if (this.counter === 5)
        {
            text.setText("Search the living room for possible fingerprints and clues.");
        }
            if (this.counter === 6) 
        {
            this.state.start("crimeSceneMain");
        }

    },
    
    startGame: function (pointer) {
        this.state.start('crimeSceneMain');
    
    },
    enableClick: function () {
        this.counter++;
     
    },
    
    shutdown: function() {
    },
}