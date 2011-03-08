var MMDD = MMDD || {};


/**
 * Inits the "user" w/ controls etc
 *
 */
MMDD.user = (function() {
	
	var player;

	function setupPrivateVariables() {
		player = new MMDD.player();
	}

	function keyControls(e) {
		var code = e.keyCode;

		switch(code) {
			case 39 :
				player.moveRight();
				break;
			case 37 :
				player.moveLeft();
				break;
			case 38 : 
				player.moveUp();
				break;
			case 40 :
				player.moveDown();
				break;
		}

	}

	function stopMoving(e) {
		//player.stop();
	}

	function initDOMbindings() {
		$(document).keydown(keyControls).keyup(stopMoving);
	}

	return {
		init : function() {
			setupPrivateVariables();

			initDOMbindings();

		},
	}

})();