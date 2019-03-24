const _ = require('lodash')

const str = 'constantinople';
let split = _.split(str,'');
let rev = _.reduceRight(split, (all, next) => {return `${all}${next}`})
console.log(rev);
