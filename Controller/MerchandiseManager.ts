import {Merchandise} from "../Models/Merchandise";

export class MerchandiseManager {
    static merchandiseList: Merchandise[] = [new Merchandise(1,"snack","kid",5000,100,10-1-2022,"sweet")];

    public showList(): Merchandise[] {
        if (MerchandiseManager.merchandiseList.length == 0) {
             console.log("No data")
        }else
        return MerchandiseManager.merchandiseList;
    }
    public addNewMerchandise(id: number, name: string, type: string, price: number, quantity: number, detail: string, dateCreated: number) {
        let merchandise = new Merchandise(id, name, type, price, quantity, dateCreated, detail);
        MerchandiseManager.merchandiseList.push(merchandise);
    }
    public editMerchandise(name: string, newObject) {
        let index = this.findMerchandiseByName(name);
        if (index == -1) {
            return "This merchandise does not exist";
        }
        MerchandiseManager.merchandiseList.splice(index, 1, newObject);
    }
    public removeMerchandise(id: number) {
        for (let i = 1; i <= MerchandiseManager.merchandiseList.length; i++) {
            if (MerchandiseManager.merchandiseList[i].getId() === id ){
                MerchandiseManager.merchandiseList.splice(id);
            }
            else return "This merchandise does not on the list!"
        }
    }
    public findMerchandiseByName(name: string) {
        for (let i = 0; i < MerchandiseManager.merchandiseList.length; i++) {
            if (MerchandiseManager.merchandiseList[i].getName() === name) {
                return i;
            }
        }
        return -1;
    }
}