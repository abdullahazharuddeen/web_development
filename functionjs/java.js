

calculate();
function calculate()
{
    console.log(21+21);
}

const calculate3 = () =>
{

}

const calculate2=function(number1,number2)
{
    return number1 +number2;
}

console.log(calculate2(23,42));

let calculate4 =( ()=>
{
    console.log(8+9);
})();

let countTheSizeOfArray=( ()=>
{
    let Int1=3;
    let arra=new Array(Int1);
    for(let i=0;i<Int1;i++)
    {
        arra[i]=12;

    }

    for(let i=0;i<5;i++)
    {
        console.log(i);
    }

})();



    let function1=(()=>
    {

        const student=
        {
            name:'abdullah',
            age:'19',
            hobbies: [['hiking','reading','cooking']]
        }
        console.log(student.name);
        console.log(student.hobbies[0][1])


    }
    )();

    let finalsdf=(()=>
    {

        console.log(3+2);
    })();


