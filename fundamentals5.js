// a
const getGreetingExpression = function(name) {
  return 'Hello ' + name + '!';
};

const getGreetingArrow = (name) => {
return 'Hello ' + name + '!';
}

console.log(getGreetingExpression('Jasmine'));
console.log(getGreetingArrow('Jasmine'));