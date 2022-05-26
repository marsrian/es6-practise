const ages = [21, 24, 23, 27, 26];
const ages2 = [15, 18, 19];
const ages3 = [34, 28, 56, 63];
const allAges = ages.concat(ages2);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges);
console.log(allAges2);

const business = 670;
const minister = 450;
const sochib = 250;
// const maximum = Math.max(business, minister, sochib);
// console.log(maximum);
const takaPoisa = [650, 860, 250, 340, 590];
const maximum2 = Math.max(...takaPoisa);

console.log(maximum2);