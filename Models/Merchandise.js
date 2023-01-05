"use strict";
exports.__esModule = true;
exports.Merchandise = void 0;
var Merchandise = /** @class */ (function () {
    function Merchandise(id, name, type, price, quantity, dateCreated, detail) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._price = price;
        this._quantity = quantity;
        this._dateCreated = dateCreated;
        this._detail = detail;
    }
    Merchandise.prototype.getId = function () {
        return this._id;
    };
    Merchandise.prototype.setId = function (value) {
        this._id = value;
    };
    Merchandise.prototype.getName = function () {
        return this._name;
    };
    Merchandise.prototype.setName = function (value) {
        this._name = value;
    };
    Merchandise.prototype.getType = function () {
        return this._type;
    };
    Merchandise.prototype.setType = function (value) {
        this._type = value;
    };
    Merchandise.prototype.getPrice = function () {
        return this._price;
    };
    Merchandise.prototype.setPrice = function (value) {
        this._price = value;
    };
    Merchandise.prototype.getQuantity = function () {
        return this._quantity;
    };
    Merchandise.prototype.setQuantity = function (value) {
        this._quantity = value;
    };
    Merchandise.prototype.getDateCreated = function () {
        return this._dateCreated;
    };
    Merchandise.prototype.setDateCreated = function (value) {
        this._dateCreated = value;
    };
    Merchandise.prototype.getDetail = function () {
        return this._detail;
    };
    Merchandise.prototype.setDetail = function (value) {
        this._detail = value;
    };
    return Merchandise;
}());
exports.Merchandise = Merchandise;
