"use strict";
exports.__esModule = true;
exports.MerchandiseManager = void 0;
var Merchandise_1 = require("../Models/Merchandise");
var MerchandiseManager = /** @class */ (function () {
    function MerchandiseManager() {
    }
    MerchandiseManager.prototype.showList = function () {
        if (MerchandiseManager.merchandiseList.length == 0) {
            console.log("No data");
        }
        else
            return MerchandiseManager.merchandiseList;
    };
    MerchandiseManager.prototype.addNewMerchandise = function (id, name, type, price, quantity, detail, dateCreated) {
        var merchandise = new Merchandise_1.Merchandise(id, name, type, price, quantity, detail, dateCreated);
        MerchandiseManager.merchandiseList.push(merchandise);
    };
    MerchandiseManager.prototype.editMerchandise = function (name, newObject) {
        var index = this.findMerchandiseByName(name);
        if (index == -1) {
            return "This merchandise does not exist";
        }
        MerchandiseManager.merchandiseList.splice(index, 1, newObject);
    };
    MerchandiseManager.prototype.removeMerchandise = function (id) {
        for (var i = 1; i <= MerchandiseManager.merchandiseList.length; i++) {
            if (MerchandiseManager.merchandiseList[i].getId() === id) {
                MerchandiseManager.merchandiseList.splice(id);
            }
            else
                return "This merchandise does not on the list!";
        }
    };
    MerchandiseManager.prototype.findMerchandiseByName = function (name) {
        for (var i = 0; i < MerchandiseManager.merchandiseList.length; i++) {
            if (MerchandiseManager.merchandiseList[i].getName() === name) {
                return i;
            }
        }
        return -1;
    };
    MerchandiseManager.merchandiseList = [new Merchandise_1.Merchandise(1, "snack", "kid", 5000, 100, "10-1-2022", "sweet")];
    return MerchandiseManager;
}());
exports.MerchandiseManager = MerchandiseManager;
