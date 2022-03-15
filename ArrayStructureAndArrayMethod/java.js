

let stackloop=(()=>
{


    const stack=[];

    //using push method
    
    stack.push("mango","apple","strawberry","orange","Avacado");

    console.log(stack);
// using pop method
    let pop1=stack.pop();
    console.log(pop1);

    let shift1=stack.shift();
    console.log(shift1);

  //using shift method
  console.log(stack)
    stack.unshift("Water Melon");
  

  //using slice method

  console.log(stack)

  let sliceone=stack.slice(2,4);
  console.log(sliceone);
  let slicewo=stack.slice(-1);
  console.log(slicewo);
  let slice3=stack.slice(1,-1);
  console.log(slice3);

//using splice method

console.log(stack);

let splice1=stack.splice(-1);
let splice2=stack.splice(2)
let splice3=stack.splice(1,1,"Mango")
console.log(stack,splice1);


// using reverse method

stack.reverse();
console.log(stack);

// using concat method

stack2=["banana","BlueBerry","Grappes","PassionFruit"];
stack3=["pineApple","orange","Rambuttan","pears"];
let stack4=stack.concat(stack2,stack3);
console.log(stack4);

//using join method
console.log(stack4.join(' '));
//using at method

console.log(stack4.at(-1),stack4.at(0));

// using foreach method


stack4.forEach((item,index)=>
{
    console.log('a['+index+"] 20$"+item);
}
);

let newstack=[21,31,1,2,4,1,4,5,123,532]
//using map
let multinum=newstack.map((item)=>item*32);
console.log(multinum);

// using filter function
let odd=newstack.filter(item=>item%2==0)
console.log(odd)

// reduce function 

let sum=newstack.reduce((accumulator,currentvalue)=>
{
  console.log("at this index[",accumulator,"] current value is",currentvalue)
 return  accumulator+currentvalue;
  
},0
);

let even=newstack.filter((item)=>item%2!==0);

let evensum=even.reduce((a,i)=>
{
  return a+i;
},0
);

console.log(sum);

console.log(evensum)

// find and findIndex function

let firstOdd=newstack.find(item=>item%2!==0);
let firstevenIndex=newstack.findIndex((item)=>item%2==0)

console.log(firstOdd);
console.log(firstevenIndex);

// for checking if there any element within our condition we use some() function and for checking for all the elements have the required value we use every() function

let IsThereAnyOdd=newstack.some((item)=>item%2!==0)

console.log(IsThereAnyOdd);

let IseveryElementAreOdd=newstack.every((item)=>item%2!==0)

console.log(IseveryElementAreOdd);

// flat() function is specially use for flattening the array to certain depth

const array1=[12,124,[21,32,[21]],[[[[[[[[[[[[[[214]]]]]]]]]]]]]]];

let array2=array1.flat(Infinity);
console.log(array2)

// sort the alphebatical order name and well as the number but we use different method for example for sorting in alphaber ascending we use just sort() but for numbers sort(function(a,b){return a-b})

let letters=[];
letters.push("A","Q","P","B","C","D");
letters.sort();

array2.sort(function(a,b){return a-b})
console.log(letters)
console.log(array2)


//Array Destructing and Object Destructing

const salaries=[2400,50000,140000]

const [cleaners,manager,CEO]=salaries;

console.log(cleaners)

const obj={

  name:'Abdullah',
  Surname:'Azharuddeen',
  Age:19,

}

const {name,Surname,Age}=obj;

console.log(name,Surname,Age);



}
)();

