class Collection {
    constructor() {
        this.pool = [];
    }
    pushData(T) {
        this.pool.push(T);
        console.log(this.pool);
    }
}
function testGenerics() {
    let userCollection = new Collection();
    let carCollection = new Collection();
    // Insert many items as mentioned in value
    let userData1 = { name: "Guest", age: 20 };
    let userData2 = { name: "Baby", age: 2 };
    let carData = { brand: "Hundai", model: "I20" };
    userCollection.pushData(userData1);
    userCollection.pushData(userData2);
    carCollection.pushData(carData);
}
