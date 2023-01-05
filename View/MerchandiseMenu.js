"use strict";
exports.__esModule = true;
exports.MerchandiseMenu = void 0;
var MerchandiseManager_1 = require("../Controller/MerchandiseManager");
var Merchandise_1 = require("../Models/Merchandise");
var readlineSync = require("readline-sync");
var MerchandiseMenu = /** @class */ (function () {
    function MerchandiseMenu() {
        this.merchandiseManager = new MerchandiseManager_1.MerchandiseManager();
        this.menu = "\n    Welcome!\n    You are in WarehouseManagement Menu\n    please select your command:\n    1. Show all merchandises\n    2. Search merchandise by name\n    3. Add a new merchandise\n    4. Edit merchandise information\n    5. Delete a merchandise\n    6. Exit\n    ";
    }
    MerchandiseMenu.prototype.selection = function () {
        while (true) {
            var command = void 0;
            do {
                console.log(this.menu);
                command = +readlineSync.question("Your command: ");
                if (command < 1 || command > 6) {
                    console.log("Invalid command");
                }
            } while (command < 1 || command > 6);
            switch (command) {
                case 1: {
                    console.table(this.merchandiseManager.showList());
                    break;
                }
                case 2: {
                    var merchandiseName = readlineSync.question("What do you want to find: ");
                    var index = this.merchandiseManager.findMerchandiseByName(merchandiseName);
                    console.table(MerchandiseManager_1.MerchandiseManager.merchandiseList[index]);
                    break;
                }
                case 3: {
                    var merchandiseId = +readlineSync.question("Enter merchandise id number: ");
                    var merchandiseName = readlineSync.question("Enter merchandise name: ");
                    var merchandiseType = readlineSync.question("Enter merchandise type: ");
                    var merchandisePrice = +readlineSync.question("Enter merchandise price: ");
                    var merchandiseQuantity = +readlineSync.question("Enter merchandise quantity: ");
                    var merchandiseDetail = readlineSync.question("Enter merchandise detail: ");
                    var merchandiseDateCreated = readlineSync.question("Enter current time and date: ");
                    this.merchandiseManager.addNewMerchandise(merchandiseId, merchandiseName, merchandiseType, merchandisePrice, merchandiseQuantity, merchandiseDetail, merchandiseDateCreated);
                    break;
                }
                case 4: {
                    var currentMerchandiseName = readlineSync.question("Enter editing merchandise name: ");
                    var merchandiseId = +readlineSync.question("Enter new merchandise id number: ");
                    var merchandiseName = readlineSync.question("Enter new merchandise name: ");
                    var merchandiseType = readlineSync.question("Enter new merchandise type: ");
                    var merchandisePrice = +readlineSync.question("Enter new merchandise price: ");
                    var merchandiseQuantity = +readlineSync.question("Enter new merchandise quantity: ");
                    var merchandiseDetail = readlineSync.question("Enter new merchandise detail: ");
                    var merchandiseDateCreated = readlineSync.question("Enter current time and date: ");
                    var newMerchandise = new Merchandise_1.Merchandise(merchandiseId, merchandiseName, merchandiseType, merchandisePrice, merchandiseQuantity, merchandiseDetail, merchandiseDateCreated);
                    this.merchandiseManager.editMerchandise(currentMerchandiseName, newMerchandise);
                    break;
                }
                case 5: {
                    var deleteMerchandise = readlineSync.question("Enter id: ");
                    this.merchandiseManager.removeMerchandise(deleteMerchandise);
                    break;
                }
                case 6: {
                    return;
                }
            }
        }
    };
    return MerchandiseMenu;
}());
exports.MerchandiseMenu = MerchandiseMenu;
