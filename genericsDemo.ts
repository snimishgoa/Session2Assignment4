interface IUser {
    name: string;
    age: number;
}

interface ICar {
    brand: string;
    model: string;
}

class Collection<T> {
    private pool: T[];
    constructor() {
        this.pool = [];
    }

    public pushData(T): void {
        this.pool.push(T);
        console.log(this.pool);
    }
}

function testGenerics(): void {
    let userCollection: Collection<IUser> = new Collection<IUser>();
    let carCollection: Collection<ICar> = new Collection<ICar>();

    // Insert many items as mentioned in value

    let userData1: IUser = { name: "Guest", age: 20 };
    let userData2: IUser = { name: "Baby", age: 2 };
    let carData: ICar = { brand: "Hundai", model: "I20" };

    userCollection.pushData(userData1);
    userCollection.pushData(userData2);
    carCollection.pushData(carData);

}