let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true
};

console.log(paris.temperature);

let sydney = {
  name: "Sydney",
  country: "Australia",
  language: "English",
  temperature: 24,
  capitalCity: false
};

console.log(sydney.temperature);

let ausCities = ["Sydney", "Melbourne", "Newcastle"];

console.log(ausCities[0]);
console.log(ausCities[1]);
console.log(ausCities[2]);
//OR
function showCity(city) {
  console.log(city);
}
ausCities.forEach(showCity);

ausCities = [
  {
    name: "Sydney",
    country: "Australia",
    language: "English",
    temperature: 24,
    capitalCity: false
  },
  {
    name: "Melbourne",
    country: "Australia",
    language: "English",
    temperature: 18,
    capitalCity: false
  },
  {
    name: "Newcastle",
    country: "Australia",
    language: "English",
    temperature: 25,
    capitalCity: false
  }
];
console.log(ausCities[0].name);
console.log(ausCities[0].temperature);
console.log(ausCities[1].name);
console.log(ausCities[1].temperature);
console.log(ausCities[2].name);
console.log(ausCities[2].temperature);
