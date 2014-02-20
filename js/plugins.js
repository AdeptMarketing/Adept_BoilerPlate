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


/* Equal Height Plugin */
/* If container has images, load using window.load rather than document.ready */
/*global jQuery*/

(function($) {
    "use strict";
    $.equalHeight = function(el, options) {
        var defaults, plugin, init, resetHeight, setCollectionHeight;

        defaults = {
            extraSpacing: 0
        };

        plugin = this;

        plugin.settings = {};

        init = function() {
            plugin.settings = $.extend({}, defaults, options);
            plugin.el = el;
            plugin.resizeElements();
        };


        /**
         * Resets height of elements so that they can be
         * accurately resized
         * @return {void}
         */
        resetHeight = function() {
            $(plugin.el).each(function() {
                $(this).css("height", "auto");
            });
        };

        /**
         * Sets the height of collection elements
         * @param {int} height height to which elements should be set
         */
        setCollectionHeight = function(height) {
            $(plugin.el).each(function() {
                $(this).css("height", height + "px");
            });
        };

        /**
         * Public function to resize Elements at will
         * @return {void}
         */
        plugin.resizeElements = function() {
            var maxHeight, elementHeight;

            maxHeight = 0;
            elementHeight = 0;

            /**
             * Reset Height of all elements
             */
            resetHeight();

            $(plugin.el).each(function() {
                elementHeight = parseInt($(this).outerHeight(), 10) + plugin.settings.extraSpacing;
                if (elementHeight > maxHeight) {
                    maxHeight = elementHeight;
                }
            });

            //Now set all callouts to max height as long as they were found.
            if (maxHeight !== 0) {
                setCollectionHeight(maxHeight);
            }
        };

        /**
         * Initialize Plugin
         **/
        init();

    };
}(jQuery));

// Place any jQuery/helper plugins in here

