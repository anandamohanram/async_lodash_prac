const _ = require('lodash')

const str = 'Constantinople was the capital city of the Roman Empire';
let split = _.split(str, ' ');


let shuffledArray = _.shuffle(split)
let shuffledStmt = _.reduce(shuffledArray, (all, next) => { return `${all} ${next}` })
console.log(_.startCase(shuffledStmt));


let shuffledArray2 = _.shuffle(split);
let shuffledStmt2 = _.join(shuffledArray2, ' ');
console.log(_.startCase(shuffledStmt2));