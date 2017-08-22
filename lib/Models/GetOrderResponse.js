/**
 * MundiAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of GetOrderResponse
 */
class GetOrderResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.id = this.constructor.getValue(obj.id);
        this.code = this.constructor.getValue(obj.code);
        this.currency = this.constructor.getValue(obj.currency);
        this.items = this.constructor.getValue(obj.items);
        this.customer = this.constructor.getValue(obj.customer);
        this.status = this.constructor.getValue(obj.status);
        this.createdAt = this.constructor.getValue(obj.createdAt || obj.created_at);
        this.updatedAt = this.constructor.getValue(obj.updatedAt || obj.updated_at);
        this.charges = this.constructor.getValue(obj.charges);
        this.invoiceUrl = this.constructor.getValue(obj.invoiceUrl || obj.invoice_url);
        this.shipping = this.constructor.getValue(obj.shipping);
        this.metadata = this.constructor.getValue(obj.metadata);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'id', realName: 'id' },
            { name: 'code', realName: 'code' },
            { name: 'currency', realName: 'currency' },
            { name: 'items', realName: 'items', array: true, type: 'GetOrderItemResponse' },
            { name: 'customer', realName: 'customer', type: 'GetCustomerResponse' },
            { name: 'status', realName: 'status' },
            {
                name: 'createdAt',
                realName: 'created_at',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            {
                name: 'updatedAt',
                realName: 'updated_at',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'charges', realName: 'charges', array: true, type: 'GetChargeResponse' },
            { name: 'invoiceUrl', realName: 'invoice_url' },
            { name: 'shipping', realName: 'shipping', type: 'GetShippingResponse' },
            { name: 'metadata', realName: 'metadata' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = GetOrderResponse;