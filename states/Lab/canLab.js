/******************************************************************
    
    This Level covers Slides 38 through 39.  
    
    Item: Soda Can
    Details: Clear, non-porous item.  
    Fingerprints? No.
    Superglue at Lab.
    
    
 ******************************************************************/
BasicGame.canLab = function(game) {
    this.background;
    this.can;
    this.gun;
    this.postCard;
    this.ninhydrin;
    this.superglue;
    this.textBG;
    this.gunPrint;
    this.paperPrint;

};

BasicGame.canLab.prototype = {
    
    create: function () {
        
    //this is where all your assets need to be called to be in the main menu
        this.background = this.add.image(0,0,'labScene');
        can = this.add.sprite(344, 380, 'Lab_Can');
        this.gun = this.add.sprite(544, 436, 'Lab_Gun');
        this.newspaper = this.add.sprite(744, 436, 'Lab_Paper');
        postCard = this.add.sprite(944, 436, 'Lab_Card');
        this.textBG = this.add.sprite(350, 680, 'text_bg');
        this.gunPrint = this.add.sprite(544,0,'Veronica_Print');
        this.gunPrint.alpha = 0;
        this.paperPrint = this.add.sprite(944,0,'Helen_Print');
        this.paperPrint.alpha = 0; 
        
        this.gun.tint = 0x9999FF;
        this.newspaper.tint = 0x9999FF;
        postCard.tint = 0x9999FF;
        
        ninhydrin = this.add.sprite(800, 550, 'Use_Ninhydrin');
        superglue = this.add.sprite(300, 550, 'Use_Superglue');
        returnBack = this.add.sprite(0,0,'Back');
        
        //Enable input on the items
        ninhydrin.inputEnabled = true;
        superglue.inputEnabled = true;
        returnBack.inputEnabled = true;
        superglue.events.onInputDown.add(this.useSuperGlue, this);
        ninhydrin.events.onInputDown.add(this.useNinhydrin, this);
        returnBack.events.onInputDown.add(this.returnToLab,this);

        //Text for the response
        this.response = this.add.text(400,700, 'Which fingerprinting process is best for this piece of evidence?', { font: "24px Helvetica", align: 'Left', wordWrap: true, wordWrapWidth: this.textBG.width-100, fill: '#ffffff' });
    
    },
    
    update: function () {
        if(BasicGame.gunLabComplete === true){
            gunPrint.alpha = 1;
            this.gun.destroy();
        }
        if(BasicGame.canLabComplete === true){
            can.destroy();
        }
        if(BasicGame.paperLabComplete === true) {
            paperPrint.alpha = 1;
            newspaper.destroy();
        }
        if(BasicGame.postCardLabComplete === true) {
            postCard.destroy();
        }
    
    },
    
    useSuperGlue: function () {
    BasicGame.labCounter++;
    BasicGame.canLabComplete = true;
    superglue.loadTexture('Correct_Superglue');
    returnBack.loadTexture('Next')
    this.response.setText("Good idea!  Super glue fuming works on non-porous items.  Unfortunately, there are not any usable prints on this item. Click Next to continue");
    superglue.inputEnabled = false;
    ninhydrin.inputEnabled = false;
        
    
    },
    
    useNinhydrin: function () {
    ninhydrin.loadTexture('Incorrect_Ninhydrin');
    this.response.setText("The soda can is a nonporous item.  Ninhydrin works best on porous items, like paper.");
    
    },
    returnToLab: function () {
        this.state.start('labSceneMain');
    },
}