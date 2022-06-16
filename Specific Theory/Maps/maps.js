const restaurantMap = new Map();

// Add new data

restaurantMap.set("name", "Classico Italiano");
restaurantMap.set(1, "Firenze, Italy");

// set returns updated map

console.log(restaurantMap.set(2, "Lisbon, Portugal"));

// sets can be chained back to back as updated map is returned after each call

restaurantMap
  .set(3, "London, England")
  .set(4, "Paris, France")
  .set(true, "We are open");

console.log(restaurantMap);

// retrieve values from the map using .get() method

console.log(restaurantMap.get("name"));
