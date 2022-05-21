class Vehicle {
    constructor(wheels) {
       this.wheels = wheels;
    }
    toString() {
       return 'Wheels: ' + this.wheels + ' ';
    }
 }
 
 class Car extends Vehicle {
    constructor(color) {
       super(4);
       this.color = color;
    }
    toString() {
       return super.toString() + ' colored: ' + this.color;
    }
 }
 
 let car = new Car('blue');
 console.log(car.toString());
 
 console.log(car instanceof Car);
 console.log(car instanceof Vehicle);
 
////MY CODE ADDED HERE

//I'm creating a new object type of person

class Person {
   constructor(name, age, gender){
      //I am pointing the arguments to the Person attributes
      this.name = name;
      this.age = age;
      this.gender = gender;
   }
   //overriding how the toString method prints the object
   toString(){
      return 'Name: ' + this.name + ', Age: ' + this.age + ' Gender: ' + this.gender;
   }
}

//creating another class with the same attributes that the previous class but with additional attributes of their own.
//this is possible with inheritance, thanks to the keyword extends.

class Employee extends Person {
   constructor(name, age, gender,employeeID) {
      //it inherits the attributes of a Person object.
      super(name, age, gender);
      this.employeeID = employeeID;
      return super.toString() + 'employee ID: ' + this.employeeID;
   }
}