/**
 * @fileoverview Externs para el API para Feeds de Google
 * https://developers.google.com/feed/v1/
 * @author Alan Reyes (kg.designer@gmail.com)
 * @externs
 */

var google;

google.feeds;

/**
 * Crea una instancia del engine para Feeds con la URL indicada
 * @param {String} feed_url La URL del feed
 * @constructor
 */
google.feeds.Feed = function(feed_url) {}

/**
 * @type {String}
 * @const
 */
google.feeds.Feed.MIXED_FORMAT;

/**
 * @param {String=} opt_format
 * @returns {google.feeds.Feed}
 */
google.feeds.Feed.prototype.setResultFormat = function(opt_format) {}

/**
 * @param {Number=} opt_format
 * @returns {google.feeds.Feed}
 */
google.feeds.Feed.prototype.setNumEntries = function(opt_num) {}

/**
 * @param {Function=} opt_callback
 * @returns {google.feeds.Feed}
 */
google.feeds.Feed.prototype.load = function(opt_callback) {}
