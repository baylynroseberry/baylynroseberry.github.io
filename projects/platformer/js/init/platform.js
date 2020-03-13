(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE

        // example:
        createPlatform(700, 350,0.1,100);
        createPlatform(500, 550,0.5,40);
        createPlatform(0, 500,1,0.1);
        createPlatform(200,600,0.5,40)
        createPlatform(-25,0,0.1,100)
        createPlatform(880,0,0.1,100)
        createPlatform(-5,0,3)
        createPlatform(770,350,0.2)
        createPlatform(-150,450,1,0.1)
        createPlatform(-250,400,1,0.1)
        createPlatform(300,335,0.6,0.2)
        createPlatform(870,400,1,0,2)
        createPlatform(870,420,1,0,2)
        createPlatform(-370,195,1,0,2)
        createPlatform(-370,175,1,0,2)
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);