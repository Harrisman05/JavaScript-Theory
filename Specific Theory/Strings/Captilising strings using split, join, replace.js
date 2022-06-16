const passenger = "harley clive huntley malconian harris";

// Capitalising the first letter of each word

const capitaliseName = function (name) {
  splitName = name.split(" ");
  const namesUpper = [];

  splitName.forEach((element) =>
    namesUpper.push(element[0].toUpperCase() + element.slice(1))
  );

  namesUpper.join(" ");
  return namesUpper;
};

console.log(capitaliseName(passenger));

const capitaliseName2 = function (name) {
  splitName = name.split(" ");
  const namesUpper = [];

  splitName.forEach((element) =>
    namesUpper.push(element.replace(element[0], element[0].toUpperCase()))
  );

  console.log(namesUpper);
};

capitaliseName2(passenger);
