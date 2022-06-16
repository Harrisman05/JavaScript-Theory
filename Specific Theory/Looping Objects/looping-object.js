weekdays = {
  mon: "work",
  tues: "work",
  wed: "work",
  thurs: "work",
  fri: "work",
  sat: "rest",
  sun: "rest",
};

weekdayEntries = Object.entries(weekdays);
console.log(weekdayEntries);

// creates a large array containing sub arrays of keys and values

for (const [key, value] of weekdayEntries) {
  console.log(`On ${key} I ${value}`);
}

// looping over object to log key and value. Destructuring key and value
// as well
