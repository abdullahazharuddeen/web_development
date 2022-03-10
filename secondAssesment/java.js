


// question number 1
let sortarray=(()=>
{
    const numbers=[21,30,12,18,-5,38,-10,-11,0,32];
let evenNumber=[];
let oddnumbers=[];
    
    for(let i=0;i<numbers.length;i++)
    {
        if(numbers[i]%2==0)
        {
            
            evenNumber.push(numbers[i]);
            
        }
        else 
        {
            oddnumbers.push(numbers[i]);
        }   

    }


    for(let i=0;i<evenNumber.length;i++)
    {
        console.log(evenNumber[i]);
    }
    for(let i=0;i<oddnumbers.length;i++)
    {
        console.log(oddnumbers[i]);
    }

}
)();

//question 2
let makeline=function(number1)
{

    // we can use anoher method i showed by comment
    //var str;
    for(let i=0;i<number1;i++)
    {
        //str+="#";

        console.log('#');
        
    }
    //return str;
    
    
    
}
;

//console.log(makeline(6));
makeline(6);



// question 3

let annonymous=function(X)
{
    if(typeof(X)=="string")
    {
        return "ARR";

    }
    else if(typeof(X)=='number')
    {
        return 3*X;
    }
}
;
console.log(annonymous(3));


//question 4 a,b,c



  const  Brad ={

    
         Id1:7,
    };

    
  const  Leroy ={

    
    
    Id2:9,
   
};



const  Almina ={

    Id3:3,
};




    console.log(Brad.Id1);
    console.log(Leroy.Id2);
    console.log(Almina.Id3);

    let newanimalArray=[Brad.Id1,Leroy.Id2,Almina.Id3];
    console.log(newanimalArray);


