
//1.Create an array called someData with the following entry: 15. Use the push method to add the following elements to the array.

let someData=[15];
someData.push(true);
someData.push(7);
someData.push(42,"The Hitchhiker's Guide to the Galaxy");

console.log(someData)

//2.You must create new array that consist of ['cute puppy', 'cute kitten', 'cute bunny'] elements using pet array.

let mypet=['puppy','kitten','bunny'];
let pet=mypet.map((item)=>('cute '+item))
console.log(pet)


const arr = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket']

//3.a)Use bracket notation to replace 'slinky' in the array with 'space tether'. Print the array to confirm the change.
let indexSlinky=arr.findIndex(name=>name=='slinky')
arr[indexSlinky]='space tether';
console.log(arr)

//3.b)Remove the last item from the array with pop. Print the element removed and the updated array.

let removedelement=arr.pop();
console.log(removedelement);
console.log(arr)

//3.c)Remove the first item from the array with shift. Print the element removed and the updated array.

let shiftdata=arr.shift();
console.log(shiftdata);
console.log(arr)

//3. d) Add the items 1138 and '20 meters' to the array - the number at the start and the string at the end. Print the updated array to confirm the changes.

arr.push(1138);
arr.unshift('20 meters');

console.log(arr)


const newarr = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket']

//4. a)Remove "secutrity blanket" from the array

let securityblanketIndex=newarr.findIndex(name=>name=='security blanket')

newarr.splice(securityblanketIndex);
console.log(newarr)

// 4. b) Replace the elements at indexes 2 - 4 with the items 'cat', 'fob', and 'string cheese'
newarr.splice(2,4,'cat','fob','string cheese')
console.log(newarr)

//5 Convert the given array to "Bananas" string

let BananArr = ['B', 'n', 'n', 's']
let stringbanan=BananArr.join('a')
console.log(stringbanan)


// 6 Extract out murder weapon and place using destructring

const murder =  {
    murderer : 'unknown',
    place: 'kitchen',
    weapon: 'knife'
}

const {murderer,place,weapon}=murder;

console.log(weapon);

// 7 EXTRA You're a detective and you must solve a murder! The object below contains information about suspects. First of all, you must find the people who were in the house on the night of the murder. (use "present" key for that )Remember that, murder committed in the kitchen. So, the murdered had to be in the kitchen! How is the murderer?

const dataOfSuspects = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

let namofsuspects=dataOfSuspects.filter(name=>name.present==true && name.rooms[0].kitchen==true)

const [{name,present,rooms}]=namofsuspects;

console.log(name)
