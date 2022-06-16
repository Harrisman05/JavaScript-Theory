const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// to object.create, pass in the an argument that you want the prototype to be for the new harley object

const harley = Object.create(PersonProto);
console.log(harley); // {}, for now an empty object

harley.firstName = "harley";
harley.birthYear = 1997;
harley.calcAge();

console.log(harley.__proto__ === PersonProto);

const jessica = Object.create(PersonProto);
// using init method in the prototype variable

jessica.init("jessica", 1979);
