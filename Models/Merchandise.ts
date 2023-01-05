export class Merchandise {
    private _id: number;
    private _name: string;
    private _type: string;
    private _price: number;
    private _quantity: number;
    private _dateCreated: string;
    private _detail: string;

    constructor(id: number, name: string, type: string, price: number, quantity: number, dateCreated: string, detail: string) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._price = price;
        this._quantity = quantity;
        this._dateCreated = dateCreated;
        this._detail = detail;
    }

    getId(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getType(): string {
        return this._type;
    }

    setType(value: string) {
        this._type = value;
    }

    getPrice(): number {
        return this._price;
    }

    setPrice(value: number) {
        this._price = value;
    }

    getQuantity(): number {
        return this._quantity;
    }

    setQuantity(value: number) {
        this._quantity = value;
    }

    getDateCreated(): string {
        return this._dateCreated;
    }

    setDateCreated(value: string) {
        this._dateCreated = value;
    }

    getDetail(): string {
        return this._detail;
    }

    setDetail(value: string) {
        this._detail = value;
    }
}