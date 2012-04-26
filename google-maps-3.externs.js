/**
 * @fileoverview Contiene la definición de componentes externos
 * @author Alan Reyes (kg.designer@gmail.com)
 * @externs
 */

var google;

google.maps;

/**
 * Crea un Mapa de Google
 * @constructor
 */
google.maps.Map = function() {};

google.maps.Map.prototype.mapTypes;

google.maps.Map.prototype.setOptions = function() {};

/** @nosideeffects */
google.maps.Map.prototype.getMapTypeId = function () {};

google.maps.Map.prototype.panTo = function (coords) {};

/** @nosideeffects */
google.maps.Map.prototype.getDiv = function() {};

/**
 * Crea un Mapa de Google
 * @constructor
 */
google.maps.MarkerImage = function(url, size, origin, anchor) {};

/**
 * Crea un Mapa de Google
 * @constructor
 */
google.maps.Size = function(width, height) {};

/**
 * Crea un Mapa de Google
 * @constructor
 */
google.maps.Point = function(x, y) {};

/**
 * Crea un Mapa de Google
 * @constructor
 */
google.maps.LatLng = function(lat, lng) {};

/**
 * Crea un Mapa de Google
 * @constructor
 */
google.maps.ImageMapType = function() {};

google.maps.event;

google.maps.event.addListener = function() {};

/**
 * Crea un Mapa de Google
 * @constructor
 */
google.maps.InfoWindow = function() {};

/**
 * Crea un Mapa de Google
 * @enum {string}
 */
google.maps.Animation = {
  'DROP': 'drop'
};

/**
 * Crea un Mapa de Google
 * @constructor
 */
google.maps.Marker = function() {};

google.maps.Marker.prototype.setMap = function(map) {};