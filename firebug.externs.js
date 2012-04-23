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
 * INFO
 * @param {...*} var_args
 * @return {undefined} No devuelve nada
 * @nosideeffects
 */
Console.prototype.info = function(var_args) {};

/**
 * GROUP
 * @param {...*} var_args
 * @return {undefined} No devuelve nada
 * @nosideeffects
 */
Console.prototype.group = function(var_args) {};

/**
 * GROUP COLLAPSED
 * @param {...*} var_args
 * @return {undefined} No devuelve nada
 * @nosideeffects
 */
Console.prototype.groupCollapsed = function(var_args) {};

/**
 * GROUP END
 * @param {...*} var_args
 * @return {undefined} No devuelve nada
 * @nosideeffects
 */
Console.prototype.groupEnd = function(var_args) {};

/**
 * Consola de errores
 * @type {Console}
 */
var console;