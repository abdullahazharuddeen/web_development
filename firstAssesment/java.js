
//first question code
const number1='456isANnumber';
const number2='60';
const number3 =516;


const sum1=parseInt(number1)+parseInt(number2);

if(sum1===number3)
{
    console.log("Good Job!");
}
else
{
    console.log("Does not match");
}

//second question code

let nameOfTheSpaceShuttle='Discovery';
let ShuttleSpeedmph=17500;
let DistanceToMars=225000000;
let MilesPerKilometer=0.61;

console.log(typeof(nameOfTheSpaceShuttle));
console.log(typeof(ShuttleSpeedmph));
console.log(typeof(DistanceToMars));
console.log(typeof(MilesPerKilometer));

let MilesToMars=MilesPerKilometer*DistanceToMars;
let Hours=MilesToMars/ShuttleSpeedmph;
let days=Math.round(Hours/24);

console.log("it will take",days,"days to reach the Mars.");




