/**
 * @fileoverview Externs definition for Twitter Widgets
 * https://twitter.com/about/resources/widgets
 * @author Alan Reyes (kg.designer@gmail.com)
 * @externs
 */

var TWTR = {}

/**
 * @param {Object} options
 * @constructor
 */
TWTR.Widget = function(options) {}

/**
 * @returns {TWTR.Widget}
 */
TWTR.Widget.prototype.render = function() {}


/**
 * @param {String} user
 * @returns {TWTR.Widget}
 */
TWTR.Widget.prototype.setUser = function(user) {}

/**
 * @returns {TWTR.Widget}
 */
TWTR.Widget.prototype.start = function() {}
