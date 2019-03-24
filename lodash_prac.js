const _ = require('lodash')



console.log("\n\n---------------------- each -----------------------------------");
var arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
_.each(arr, function (number, index, numbersArr) {
    console.log('number: ' + number);
});



console.log("\n\n---------------------- groupby --------------------------------");
var grp_arr = _.groupBy(arr, 'length');
console.log(grp_arr);



console.log("\n\n---------------------- find / extend --------------------------");
var objArr = [{ 'name': 'Andy' }, { 'name': 'Benson' }, { 'name': 'Chris' }, { 'name': 'Daniel' }, { 'name': 'Eric' }]
_.find(objArr, (obj) => {
    if (obj.name === 'Benson')
        _.extend(obj, { "age": 25 });
})
console.log(objArr);



console.log("\n\n---------------------- clone / deepclone ----------------------");
const orgCar = {
    make: 'honda',
    model: 'civic',
    color: {
        exterior: 'black',
        interior: 'blue',
        highlights: 'red'
    }
}


const cloneCar = _.clone(orgCar);
cloneCar.color.exterior = 'white'
console.log(orgCar);

const deepCloneCar = _.cloneDeep(orgCar);
deepCloneCar.color.highlights = 'orange'
console.log(orgCar);



console.log("\n\n---------------------- slice ----------------------------------");
console.log(_.slice(arr, arr.length - 5));
console.log(_.slice(arr, 0, 5));



console.log("\n\n---------------------- times ----------------------------------");
let i = 0;
const printAndIncrement = () => {
    console.log(i++);
}
_.times(5, printAndIncrement);



const printDelay = () => { console.log("\n\n-------------- delay - print after 2500ms ---------------------\n\n"); }
_.delay(printDelay, 2500);





console.log("\n\n---------------------- filter ---------------------------------");
const fil = _.filter(arr, num => num.length === 3);
console.log(fil);



console.log("\n\n--------------------- partitions ------------------------------");
const [three, notThree] = _.partition(arr, num => num.length === 3);
console.log(three);
console.log(notThree);



console.log("\n\n------------------- keys and values ---------------------------");
const keys = _.keys(orgCar);
console.log(keys);

const values = _.values(orgCar);
console.log(values);

_.forIn(orgCar, (value, key) => {
    console.log(`${key}: ${value}`);
})



console.log("\n\n--------------------- reduce ------------------------------");
const red = _.reduceRight(arr, (next, total) => { return `${total}-${next}` })
console.log(red);

