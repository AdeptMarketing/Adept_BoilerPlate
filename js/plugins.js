// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());



// Equal Height Plugin
(function( $ ){

  $.fn.equalHeight = function() {
		var $this = $(this);
		var maxHeight=0;
		var elementHeight=0;

		$this.each(function(index, element) {
			var elementHeight = $(this).height();
			elementHeight = parseInt(elementHeight, 10);
			if(elementHeight > maxHeight) {
				maxHeight = elementHeight;
			}
		});
		//Now set all callouts to max height as long as they were found...
		if(maxHeight !==0) {
			$this.each(function(index, element) {
				$(this).css("height", maxHeight + "px");
			});
		}
  };
})( jQuery );

// Place any jQuery/helper plugins in here

