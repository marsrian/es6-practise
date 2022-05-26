// Object Practise:
const person = { name: 'Shakib', job: 'Cricket', age: 27, hobby: "play", address: "dhaka" };

const { name, job, salary, address } = person;
console.log(name, job, salary, address);

// nested object practise:
const complexObject = {
    name: 'Rahat',
    info: {
        address: 'Rajsahi',
        work: 'Business'
    }
}
const { work } = complexObject.info;
console.log(work);

// array practise with object:
const TamimFriends = ["shakib", "Musfiq", "Shomyo", "Mominul", "Taskin"];
const [bestPlayer] = TamimFriends
console.log(bestPlayer);
const [reverse, ...allrounder] = TamimFriends;
console.log(allrounder);