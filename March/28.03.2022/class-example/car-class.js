class Car {
    constructor(brand,model){
        this.brand = brand;
        this.model = model;
       
    }
    drive(){
        return `the car ${this.brand} - ${this.model} is driving....`;
    }
    stop(){
        return `the car ${this.brand} - ${this.model} will stop....`;
    }

}

const car = new Car('Toyota','Yaris');
const car2 = new Car('VW','up');

console.log(car);
console.log(car2);
// console.log(car.drive());
// console.log(car2.drive());
console.log(car.stop());
