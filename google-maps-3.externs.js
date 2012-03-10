/**
 * @fileoverview Contiene la definición de componentes externos
 * @author Alan Reyes (kg.designer@gmail.com)
 * @externs
 */

if ( google === undefined ) {
  var google = {};
}

if ( ! 'maps' in google ) {
  google.maps = {};
}

google.maps.MarkerImage = function() {};
google.maps.Size = function() {};
google.maps.Point = function() {};
google.maps.LatLng = function() {};
