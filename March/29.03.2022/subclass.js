// parent class 
class Person{

    constructor(name,address){
        this.name = name;
        this.address = address;
        this.occupation = 'Web developer'
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
    getOcc(){
        console.log(` your accupation is ${this.occupation} !`);
    }
}

// inheriting from parent class

class Student extends Person {
    constructor(name,address, studentID){
        super(name,address);  // calling the constructor of the parent class and we pass values to
        this.studentID = studentID;

        // overrite address value: 
        //this.address = 'Bonn'

    }
    // overriding person greet
    greet(){
        console.log(`Hello Student ${this.name}`);
        console.log(`welcome to your campus in ${this.address}`);
    }

}


const student = new Student('Max','Berlin','q1234');
student.greet();
 

////////////

const person = new Person('Franco','Hamburg');
person.greet();
person.getOcc();