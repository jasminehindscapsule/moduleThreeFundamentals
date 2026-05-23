class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  canDrive() {
    return this.age >= 18;
  }
}

// //Person.prototype.canDrive = function () {
//   return this.age >= 18;
// };

const newPerson = new PersonClass("Jasmine", 24);
const newPerson2 = new PersonClass("Kylie", 52);
const person3 = new PersonClass('Alex', 30);

console.log(newPerson);
console.log(newPerson2.canDrive());
