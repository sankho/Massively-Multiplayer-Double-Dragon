/* Author: Sankho mother-effing Mallik

*/

var MMDD = (function() {
    
    var game;
    
    function setupPrivateVariables() {
        game = new CANVIMATOR.init('game');
        MMDD.game = game;
    }
    
    /**
     * Defines the plane on which people walk
     *
     * @private
     */
    function definePlane() {
        game.addObject({
            type    : 'rect',
            x       : 0,
            y       : 350,
            width   : 800,
            height  : 125,
            color   : '#333'
        });
        game.draw();
    }

    return {
        init : function() {
            
            setupPrivateVariables();

            definePlane();

            MMDD.user.init(game);

        },

        game : game
    }
    
})();


MMDD.spriteMaps = {};