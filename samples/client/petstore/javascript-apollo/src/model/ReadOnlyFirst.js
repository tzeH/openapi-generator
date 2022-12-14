/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ReadOnlyFirst model module.
 * @module model/ReadOnlyFirst
 * @version 1.0.0
 */
class ReadOnlyFirst {
    /**
     * Constructs a new <code>ReadOnlyFirst</code>.
     * @alias module:model/ReadOnlyFirst
     */
    constructor() { 
        
        ReadOnlyFirst.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReadOnlyFirst</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReadOnlyFirst} obj Optional instance to populate.
     * @return {module:model/ReadOnlyFirst} The populated <code>ReadOnlyFirst</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReadOnlyFirst();

            if (data.hasOwnProperty('bar')) {
                obj['bar'] = ApiClient.convertToType(data['bar'], 'String');
            }
            if (data.hasOwnProperty('baz')) {
                obj['baz'] = ApiClient.convertToType(data['baz'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReadOnlyFirst</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReadOnlyFirst</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['bar'] && !(typeof data['bar'] === 'string' || data['bar'] instanceof String)) {
            throw new Error("Expected the field `bar` to be a primitive type in the JSON string but got " + data['bar']);
        }
        // ensure the json data is a string
        if (data['baz'] && !(typeof data['baz'] === 'string' || data['baz'] instanceof String)) {
            throw new Error("Expected the field `baz` to be a primitive type in the JSON string but got " + data['baz']);
        }

        return true;
    }


}



/**
 * @member {String} bar
 */
ReadOnlyFirst.prototype['bar'] = undefined;

/**
 * @member {String} baz
 */
ReadOnlyFirst.prototype['baz'] = undefined;






export default ReadOnlyFirst;

