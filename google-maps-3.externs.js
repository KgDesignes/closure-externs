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

/** @nosideeffects */
google.maps.Map.prototype.getBounds = function() {};

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
 * @param {google.maps.LatLng} sw
 * @param {google.maps.LatLng} ne
 * @constructor
 */
google.maps.LatLngBounds = function(sw, ne) {};

/**
 * @param {google.maps.LatLngBounds} other
 * @returns {Boolean}
 * @nosideeffects
 */
google.maps.LatLngBounds.prototype.intersects = function(other) {

}

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

google.maps.ControlPosition = {
  'DEFAULT': 0,
  'HORIZONTAL_BAR': 1,
  'DROPDOWN_MENU': 2
};

google.maps.MapTypeControlStyle = {
  'BOTTOM': 11,
  'BOTTOM_CENTER': 11,
  'BOTTOM_LEFT': 10,
  'BOTTOM_RIGHT': 12,
  'LEFT': 5,
  'LEFT_BOTTOM': 6,
  'LEFT_CENTER': 4,
  'LEFT_TOP': 5,
  'Ll': 13,
  'RIGHT': 7,
  'RIGHT_BOTTOM': 9,
  'RIGHT_CENTER': 8,
  'RIGHT_TOP': 7,
  'TOP': 2,
  'TOP_CENTER': 2,
  'TOP_LEFT': 1,
  'TOP_RIGHT': 3
};
