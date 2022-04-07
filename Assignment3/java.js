
//1.

let someData=[15];
someData.push(true);
someData.push(7);
someData.push(42 +" The Hitchhiker's Guide to the Galaxy");

console.log(someData)

//2.

let mypet=['puppy','kitten','bunny'];
let pet=mypet.map((item)=>('cute '+item))
console.log(pet)


const arr = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket']

//3.a)
let indexSlinky=arr.findIndex(name=>name=='slinky')
arr[indexSlinky]='space tether';
console.log(arr)

//3.b)

let removedelement=arr.pop();
console.log(removedelement);
console.log(arr)

//3.c)

let shiftdata=arr.shift();
console.log(shiftdata);
console.log(arr)

//3. d) 

arr.push(1138);
arr.unshift('20 meters');

console.log(arr)


const newarr = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket']

//4. a)

let securityblanketIndex=newarr.findIndex(name=>name=='security blanket')

newarr.splice(securityblanketIndex);
console.log(newarr)

// 4. b) 
newarr.splice(2,4,'cat','fob','string cheese')
console.log(newarr)

//5 

let BananArr = ['B', 'n', 'n', 's']
let stringbanan=BananArr.join('a')
console.log(stringbanan)


// 6 

const murder =  {
    murderer : 'unknown',
    place: 'kitchen',
    weapon: 'knife'
}

const {murderer,place,weapon}=murder;

console.log(weapon);

// 7 EXTRA 

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
