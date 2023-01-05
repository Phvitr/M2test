import {MerchandiseManager} from "../Controller/MerchandiseManager";
import {Merchandise} from "../Models/Merchandise";

const readlineSync = require("readline-sync");
export class MerchandiseMenu {
    private merchandiseManager: MerchandiseManager = new MerchandiseManager();
    private menu: string = `
    Welcome!
    You are in WarehouseManagement Menu
    please select your command:
    1. Show all merchandises
    2. Search merchandise by name
    3. Add a new merchandise
    4. Edit merchandise information
    5. Delete a merchandise
    6. Exit
    `
    public selection(): void {
        while (true) {
            let command;
            do {
                console.log(this.menu);
                command = +readlineSync.question("Your command: ");
                if (command < 1 || command > 6) {
                    console.log("Invalid command");
                }
            } while (command < 1 || command > 6);
            switch (command) {
                case 1: {
                    if (MerchandiseManager.merchandiseList.length == 0) {
                        console.log("No data")
                    }else
                    console.table(this.merchandiseManager.showList());
                    break;
                }
                case 2: {
                    let merchandiseName = readlineSync.question("What do you want to find: ");
                    let index = this.merchandiseManager.findMerchandiseByName(merchandiseName);
                    console.table(MerchandiseManager.merchandiseList[index]);
                    break;
                }
                case 3: {
                    let date = new Date()
                    let merchandiseId = +readlineSync.question("Enter merchandise id number: ");
                    let merchandiseName = readlineSync.question("Enter merchandise name: ");
                    let merchandiseType = readlineSync.question("Enter merchandise type: ");
                    let merchandisePrice = +readlineSync.question("Enter merchandise price: ");
                    let merchandiseQuantity = +readlineSync.question("Enter merchandise quantity: ");
                    let merchandiseDetail = readlineSync.question("Enter merchandise detail: ");
                    let merchandiseDateCreated = date.getDate();
                    this.merchandiseManager.addNewMerchandise(merchandiseId, merchandiseName, merchandiseType, merchandisePrice, merchandiseQuantity, merchandiseDetail, merchandiseDateCreated);
                    break;
                }
                case 4: {
                    let currentMerchandiseName = readlineSync.question("Enter editing merchandise name: ");
                    let merchandiseId = +readlineSync.question("Enter new merchandise id number: ");
                    let merchandiseName = readlineSync.question("Enter new merchandise name: ");
                    let merchandiseType = readlineSync.question("Enter new merchandise type: ");
                    let merchandisePrice = +readlineSync.question("Enter new merchandise price: ");
                    let merchandiseQuantity = +readlineSync.question("Enter new merchandise quantity: ");
                    let merchandiseDetail = readlineSync.question("Enter new merchandise detail: ");
                    let merchandiseDate = readlineSync.question("Enter new merchandise date: ");
                    let newMerchandise = new Merchandise (merchandiseId, merchandiseName, merchandiseType, merchandisePrice, merchandiseQuantity, merchandiseDetail, merchandiseDate);
                    this.merchandiseManager.editMerchandise(currentMerchandiseName, newMerchandise);
                    break;
                }
                case 5: {
                    let deleteMerchandise = readlineSync.question("Enter id: ");
                    this.merchandiseManager.removeMerchandise(deleteMerchandise);
                    break;
                }
                case 6: {
                    return;
                }
            }
        }
    }
}
