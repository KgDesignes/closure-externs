/**
 * Firebug debugging FirebugConsole, compatible with webkit FirebugConsole
 */

/**
 * FirebugConsole
 * @constructor
 */
function FirebugConsole () {}

/**
 * LOG
 * @param {...*} var_args
 * @return {undefined} No devuelve nada
 * @nosideeffects
 */
FirebugConsole.prototype.log = function(var_args) {};

/**
 * INFO
 * @param {...*} var_args
 * @return {undefined} No devuelve nada
 * @nosideeffects
 */
FirebugConsole.prototype.info = function(var_args) {};

/**
 * GROUP
 * @param {...*} var_args
 * @return {undefined} No devuelve nada
 * @nosideeffects
 */
FirebugConsole.prototype.group = function(var_args) {};

/**
 * GROUP COLLAPSED
 * @param {...*} var_args
 * @return {undefined} No devuelve nada
 * @nosideeffects
 */
FirebugConsole.prototype.groupCollapsed = function(var_args) {};

/**
 * GROUP END
 * @param {...*} var_args
 * @return {undefined} No devuelve nada
 * @nosideeffects
 */
FirebugConsole.prototype.groupEnd = function(var_args) {};

/**
 * Consola de errores
 * @type {FirebugConsole}
 */
var console;
