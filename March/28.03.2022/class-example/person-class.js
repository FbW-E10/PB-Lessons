class Person{
    constructor(name,email,address){
        this.name = name ;
        this.email = email;
        this.address = address;
    }

    greet(){
        console.log(`Hello ${this.name} how are you?`);       
         
    }

    set place(newAddress){
     this.address = newAddress
    }
    get place(){
        return this.address;
    }
     static age(){
         
        console.log(`${this.name} is 35 year old`);
    }    

}

// crerate new instace 
const person1 = new Person('John','john@gmail.com','Berlin');
console.log(person1);
person1.greet();

// set and get 
person1.place = 'Hamburg';

console.log(person1.place);
Person.age()


 

