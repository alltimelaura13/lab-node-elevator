const Elevator = require('./elevator.js');

let elevator = new Elevator();

let person = new Person("Harry", 0, 8);
let person2 = new Person("Ron", 2, 0);
let person3 = new Person("Hermione", 0, 10);

elevator.call(person);
elevator.call(person2);
elevator.call(person3);

elevator.log();

elevator.floorUp();

elevator.floorDown();
