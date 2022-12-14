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
 * The Model200Response model module.
 * @module model/Model200Response
 * @version 1.0.0
 */
class Model200Response {
    /**
     * Constructs a new <code>Model200Response</code>.
     * Model for testing model name starting with number
     * @alias module:model/Model200Response
     */
    constructor() { 
        
        Model200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Model200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Model200Response} obj Optional instance to populate.
     * @return {module:model/Model200Response} The populated <code>Model200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Model200Response();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'Number');
            }
            if (data.hasOwnProperty('class')) {
                obj['class'] = ApiClient.convertToType(data['class'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Model200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Model200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['class'] && !(typeof data['class'] === 'string' || data['class'] instanceof String)) {
            throw new Error("Expected the field `class` to be a primitive type in the JSON string but got " + data['class']);
        }

        return true;
    }


}



/**
 * @member {Number} name
 */
Model200Response.prototype['name'] = undefined;

/**
 * @member {String} class
 */
Model200Response.prototype['class'] = undefined;






export default Model200Response;

