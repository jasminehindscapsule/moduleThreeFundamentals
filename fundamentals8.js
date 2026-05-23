const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const london = {
  name: "London",
  timezone: "UK/London",
};

function printObjects(obj) {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

printObjects(london);
