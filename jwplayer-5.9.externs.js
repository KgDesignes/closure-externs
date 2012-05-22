/**
 * @fileoverview Contiene la definición de componentes externos
 * @author Alan Reyes (kg.designer@gmail.com)
 * @externs
 */

/**
 * Crea u obtiene un reproductor JWPlayer
 * @param {string=} opt_id ID del contenedor del reproductor
 * @return {jwplayer.Player|null} Reproductor asociado al contenedor
 */
function jwplayer(opt_id) {};

// Firma de la función jwplayer()
/** @typedef {function(string=): jwplayer.Player} */
jwplayer.FactoryFunction;

/**
 * Objeto para acceder al reproductor
 * @constructor
 */
jwplayer.Player = function() {}

/**
 * Obtiene el modo en el que está trabajando el reproductor
 * @return {string} El modo. Puede ser "flash", "html5" o "download"
 * @nosideeffects
 */
jwplayer.Player.prototype.getRenderingMode = function() {};

/**
 * Registra un callback para el evento que se lanza cuando el reproductor está listo
 * @param {function(jwplayer.events.PlayerEvent)} callback El callback
 * @return {jwplayer.Player} El reproductor
 */
jwplayer.Player.prototype.onReady = function(callback) {};

/**
 * Registra un callback para el evento que se lanza cuando la lista de reproducción cambia
 * @param {function(jwplayer.events.PlaylistEvent)} callback El callback
 * @return {jwplayer.Player} El reproductor
 */
jwplayer.Player.prototype.onPlaylist = function(callback) {};

/**
 * Registra un plugin
 * @param {string} id Id del plugin
 * @param {function(new:jwplayer.PluginInterface, !jwplayer.Player, ?, Element)} template El constructor del plugin
 * @param {string=} opt_swf La ruta del componente SWF del plugin (si tiene)
 * @return {jwplayer.Player} El reproductor
 */
jwplayer.Player.prototype.registerPlugin = function(id, template, opt_swf) {};

/**
 * Returns the DOM container of the Player
 * @return {Element} container
 * @nosideeffects
 */
jwplayer.Player.prototype.getContainer = function() {};

/**
 * Obtiene un plugin por ID
 * @param {string} id Id del plugin a obtener
 * @return {?jwplayer.PluginInterface} El plugin o null si no hay un plugin con ese id
 * @nosideeffects
 */
jwplayer.Player.prototype.getPlugin = function(id) {};

/**
 * Inicializa un reproductor jwPlayer
 * @param {Object} params Parámetros de configuración del plugin
 * @return {jwplayer.Player} El mismo reproductor
 */
jwplayer.Player.prototype.setup = function(params) {};

/**
 * Detiene la reproducción en el player
 * @return {jwplayer.Player} El reproductor
 */
jwplayer.Player.prototype.stop = function() {};

/**
 * Loads a new playlist into the player. The playlist parameter is required and can take a number of forms:
 * @param {(Array|Object|string)=} opt_playlist Description
 * @return {jwplayer.Player} El reproductor
 */
jwplayer.Player.prototype.load = function(opt_playlist) {};

/**
 * Toggles playback of the player. Parameters:
 * @param {boolean=} opt_state if set true the player will start playing. If set false the player will pause. If not set, the player will toggle playback.
 * @return {jwplayer.Player} El reproductor
 */
jwplayer.Player.prototype.play = function(opt_state) {};

/** @typedef {{image: string, streamer: string, file: string}} */
jwplayer.PlaylistItem;

/**
 * Plugin de jwPlayer
 * @param {jwplayer.Player} player El reproductor asociado al plugin
 * @param {Object} config La configuración del plugin
 * @param {Element} div El overlay asociado a este objeto
 * @interface
 */
jwplayer.PluginInterface = function(player, config, div) {};

/**
 * Se ejecuta cuando el reproductor cambia de tamaño
 * @param {number} width Ancho nuevo
 * @param {number} height Alto nuevo
 * @return {jwplayer.PluginInterface} El reproductor
 */
jwplayer.PluginInterface.prototype.resize = function(width, height) {};

// Namespace para los eventos
jwplayer.events = {};

/**
 * Un evento de reproductor
 * @constructor
 */
jwplayer.events.PlayerEvent = function() {};

/**
 * Un evento de playlist
 * @constructor
 */
jwplayer.events.PlaylistEvent = function() {};
