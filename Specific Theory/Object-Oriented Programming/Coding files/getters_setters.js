const account = {
  owner: "harley",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set lastest(mov) {
    this.movements.push(mov);
  },
};

// Getter

console.log(account.latest); // getter written as if it is just a property

// useful if we want to read something as a property but want to do some calculations before

// Setter

account.latest = 50;
console.log(account.movements);
