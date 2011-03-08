/* Author: Sankho mother-effing Mallik

*/

var MMDD = (function() {
    
    var game;
    
    function setupPrivateVariables() {
        game = new CANVIMATOR.init('game');
        MMDD.game = game;
    }
    
    return {
        init : function() {
            
            setupPrivateVariables();
            MMDD.user.init(game);

        },

        game : game
    }
    
})();


MMDD.spriteMaps = {};