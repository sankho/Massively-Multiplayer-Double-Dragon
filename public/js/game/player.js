var MMDD = MMDD || {};


/**
 * Module returns a constructor function which
 * is extended later on
 *
 */
MMDD.player = (function() {
	
	var canvasObj;
	var game;
	var spriteModel;

	/**
	 * Adds the player character to canvas
	 *
	 * @private
	 */
	function addPlayerToCanvas() {
		canvasObj = game.addObject($.extend({
		    type    : 'image',
		    src		: '/images/BillyLee.png',
		    x       : 30,
		    y       : 280,
		    width	: 60,
		    height  : 93
		},spriteModel.frames.init));
        
        game.draw();
	}

	/**
	 * The constructor function which ends up representing MMDD.player
	 *
	 * @param model {string}
	 * @public
	 */
	return function(model) {

		var self = this;

		model = model || 'billy';

		spriteModel = MMDD.spriteMaps[model];

		game = MMDD.game;
		addPlayerToCanvas();

		self.canvasObj = canvasObj;

		self.moveRight = function() {
			var x = canvasObj.options.x + 10;
			canvasObj.change({ x : x });
		};

		self.moveLeft = function() {
			var x = canvasObj.options.x - 10;
			canvasObj.change({ x : x });	
		};

		self.moveDown = function() {
			var y = canvasObj.options.y + 10;
			canvasObj.change({ y : y });
		};

		self.moveUp = function() {
			var y = canvasObj.options.y - 10;
			canvasObj.change({ y : y });
		};

	}

})();