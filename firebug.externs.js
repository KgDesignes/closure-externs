/**
 * Firebug debugging console, compatible with webkit console
 */

/**
 * Console
 * @constructor
 */
function Console () {}

/**
 * LOG
 * @param {...*} var_args
 * @return {undefined} No devuelve nada
 * @nosideeffects
 */
Console.prototype.log = function(var_args) {};

/**
 * Consola de errores
 * @type {Console}
 */
var console;