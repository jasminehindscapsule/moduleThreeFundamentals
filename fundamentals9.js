let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports = [...teamSports];
let dog2 = dog1;
dog2 = 'Milo';
let cat2 = {...cat1};
cat2.name = 'Kitty';

moreSports.push('Footy');
moreSports.unshift('Dance');

console.log(moreSports);
console.log(dog2);
console.log(cat2);
