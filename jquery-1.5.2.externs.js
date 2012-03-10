/**
 * @fileoverview Externs definition for jQuery Library
 * @author Alan Reyes (kutt.katrea@kgdesignes.net)
 * @externs
 */

// jQuery Namespace
var jquery;

/** @typedef {(Element|Node|string|jquery.Collection)} */
jquery.SelectableElement;

// Defines the signature of jQuery/$ function
/** @typedef {function(...[jquery.SelectableElement]): jquery.Collection} */
jquery.FactoryFunction;

/**
 * Definition of jQuery Collection Type as an Object
 * @constructor
 * @extends {Array.<Element>}
 */
jquery.Collection = function(){}

/**
 * Selects a subset of the current selected elements
 * @param {string} selector The query to filter for
 * @return {jquery.Collection} The collection filtered
 */
jquery.Collection.prototype.find = function(selector){};

/**
 * Gets or sets the internal html of the element
 * @param {string=} opt_text The text to set
 * @return {jquery.Collection} The collection
 */
jquery.Collection.prototype.html = function(opt_text){};

/**
 * Puts the parameters Elements befoore the selected Element in the selected elements parent
 * @param {...jquery.SelectableElement} var_args The elements to append
 * @return {jquery.Collection} The collection
 */
jquery.Collection.prototype.before = function(var_args){};

/**
 * Appends the parameters Elements to the selected Element
 * @param {...jquery.SelectableElement} var_args The elements to append
 * @return {jquery.Collection} The collection
 */
jquery.Collection.prototype.append = function(var_args){};

/**
 * Description
 * @param {(string|function(number,string) :string)} class_or_function One or more class names to be added to the class attribute of each matched element.
 *                                                                     A function returning one or more space-separated class names to be added to the existing class name(s). Receives the index position of the element in the set and the existing class name(s) as arguments. Within the function, this refers to the current element in the set.
 * @return {jquery.Collection} The selected collection
 */
jquery.Collection.prototype.addClass = function(class_or_function){};
/**
 * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
 * @param {(string|function(number,string): string)} class_or_function One or more space-separated classes to be removed from the class attribute of each matched element. |
 *                                                             A function returning one or more space-separated class names to be removed. Receives the index position of the element in the set and the old class value as arguments.
 * @return {jquery.Collection} The selected collection
 */
jquery.Collection.prototype.removeClass = function(class_or_function){};

/**
 * Get or set the value of an attribute for the first element in the set of matched elements.
 * @param {(string|Object.<string,*>)} name_or_map The name of the attribute to get or set.
 *                                                 A map of attribute-value pairs to set.
 * @param {(function(number, string)|*)=} opt_value_or_function A value to set for the attribute.
 *                                                               A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old attribute value as arguments.
 * @return {jquery.Collection} The collection
 */
jquery.Collection.prototype.attr = function(name_or_map, opt_value_or_function) {};

/**
 * Adds a handler to the click event of the selected element
 * @param {(Object|function(Event))} data_or_handler The handler or data for the event
 * @param {function(Event)=} opt_handler The handler
 * @return {jquery.Collection} The collection
 */
jquery.Collection.prototype.click = function(data_or_handler, opt_handler){};


jquery.Collection.prototype.bind = function(event, eventDataOrCallbackFunction, opt_callbackFunction){};

/**
 * Devuelve el alto externo del elemento
 * @return {number} El alto
 * @nosideeffects
 */
jquery.Collection.prototype.outerHeight = function() {};

/**
 * Devuelve el alto del elemento
 * @return {number} El alto
 * @nosideeffects
 */
jquery.Collection.prototype.height = function() {};

/**
 * Store arbitrary data associated with the matched elements.
 * Returns value at named data store for the first element in the jQuery collection, as set by data(name, value).
 * @param {(string|Object)=} opt_keyOrObj A1. A string naming the piece of data to set.
 *     A2. An object of key-value pairs of data to update.
 *     B. Name of the data stored.
 * @param {*=} opt_value A1. The new data value; it can be any Javascript type including Array or Object.
 *
 * @return {(jquery.Collection|*)} A. The jQuery Collection.
 *     B. The stored object
 * @see http://api.jquery.com/data/
 */
jquery.Collection.prototype.data = function(opt_keyOrObj, opt_value) {};


jquery.Collection.prototype.empty = function() {};

/**
 * Main jQuery Function
 * @param {...jquery.SelectableElement} var_args
 * @return {jquery.Collection}
 */
var jQuery = function(var_args) {};

/**
 * Makes an ajax request
 * @param {Object} params Parámetros de la petición AJAX
 * @return {jquery.Collection} El objeto jQuery
 */
jQuery.ajax = function(params) {};

/**
 * Check to see if an object is empty (contains no properties).
 * @param {Object} object The object that will be checked to see if it's empty.
 * @return {boolean} Wheter the object is empty or not
 * @nosideeffects
 */
jQuery.isEmptyObject = function(object) {};

/**
 * Merge the contents of two or more objects together into the first object.
 * @param {(Object|boolean)} target_or_deep An object that will receive the new properties if additional objects are passed in or that will extend the jQuery namespace if it is the sole argument.
 *                                       If true, the merge becomes recursive (aka. deep copy).
 * @param {Object=} opt_target_or_object1 The object to extend. It will receive the new properties.
 *                                        An object containing additional properties to merge in.
 * @param {...Object} var_args Additional objects containing properties to merge in.
 * @return {Object}
 */
jQuery.extend = function(target_or_deep, opt_target_or_object1, var_args) {};

// Aliases

//fn Alias
jQuery.fn = jquery.prototype;

//$ alias
//$ = jQuery;