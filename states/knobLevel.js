 /******************************************************************
    
    This Level covers Slides 10 through 13.  
    
    Item: Doorknob
    Details: Cannot remove, non-porous item.  
    Fingerprints? Yes.
    Dust at scene
    
 ******************************************************************/
    
BasicGame.knobLevel = function(game) {
 this.background;
 this.image; //image for the level
 this.returnStar; //return to the Menu
 
};
BasicGame.knobLevel.prototype = {
    
   create: function () {
        //adding the images to the canvas
        background = this.add.image(0,0, 'crimeScene');
        image = this.add.sprite(this.world.centerX/2,this.world.centerY/2,'Knob');
        powder = this.add.sprite(this.world.centerX, this.world.centerY-400, 'Use_Powder');
        glue = this.add.sprite(this.world.centerX, this.world.centerY-200, 'Use_Superglue');
        ninhydrin = this.add.sprite(this.world.centerX, this.world.centerY, 'Use_Ninhydrin');
        collect = this.add.sprite(this.world.centerX, this.world.centerY+200, 'Use_Collect');
        returnStar = this.add.image(0,0, 'star');
        
        //Input enabled for images
        returnStar.inputEnabled = true;
        powder.inputEnabled = true;
        glue.inputEnabled = true;
        ninhydrin.inputEnabled = true;
        collect.inputEnabled = true;  
        
        // When the user clicks on the image, return the method with the message
        returnStar.events.onInputDown.addOnce(this.returnToMenu,this);
        powder.events.onInputDown.addOnce(this.usePowder,this);
        glue.events.onInputDown.addOnce(this.useSuperGlue,this);
        ninhydrin.events.onInputDown.addOnce(this.useNinhydrin,this);
        collect.events.onInputDown.addOnce(this.collectItem,this);
        // collect.events.onInputDown.addOnce(this.incorrectResponseThree,this);

        
        //How the text will look
        this.response = this.add.text(0,this.world.centerY+300, '', { font: "24px fjalla", wordWrap: true, wordWrapWidth: 500, fill: '#fffff' });
        
    },
    update: function () {
        
       
    },
   returnToMenu: function (pointer) {
         this.state.start('Game');   
    },
    
    usePowder: function () {
        //  This will stop the user from visiting the other options
        //  Also, it will stop them from clicking option 1 and incrementing the levelCounter by an infinite amount
        BasicGame.levelCounter++;
        powder.loadTexture('Correct_Powder');
        powder.inputEnabled = false;
        glue.inputEnabled = false;
        ninhydrin.inputEnabled = false;
        collect.inputEnabled = false;
        BasicGame.knobLevelComplete = false;
        this.response.setText("A brush and black powder is ideal for processing a clear, nonporous piece of evidence at the scene.  Using the powder, you reveal a fingerprint!  You                 photograph and collect the print using a tape lift.  All items are packaged correctly.  Return to the crime scene to process more evidence, or finish up.");
        this.response.addColor('#009900',0);
    },
    useSuperGlue: function () {
       glue.loadTexture('Incorrect_Superglue');
       this.response.setText("You are unable to fume with superglue at the crime scene. Try something else.");
       this.response.addColor('#B00000',0);
    },
    
    useNinhydrin: function () {
      ninhydrin.loadTexture('Incorrect_Ninhydrin');
      this.response.setText("Ninhydrin works best on porous items.  Besides, you would not be able to apply ninhydrin to an item at the crime scene.  Try something else.");
      this.response.addColor('#B00000',0);
        
    },
    collectItem: function () {   
      collect.loadTexture('Incorrect_Collect');
      this.response.setText("A door handle is really difficult to remove from the crime scene.  The handle is nonporous with a solid, light background, so maybe you could try something           else.");
      this.response.addColor('#B00000',0);
    },


}