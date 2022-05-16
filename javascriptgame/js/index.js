var character = document.getElementById("character");
var block = document.getElementById("block");
var point=document.getElementById("diamond")


var num=0;

var checkDead = setInterval(function(){
    var characterTop=
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft=
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));


    if((blockLeft<100 && blockLeft>0) && (characterTop>=530)){
            block.style.animation ="none";
            block.style.display ="none";
            document.querySelector("img").setAttribute("src","../images/Over.png");
num=1;
            document.getElementById("Char1").setAttribute("src","NULL")
            document.getElementById("Dia1").setAttribute("src","NULL")
            document.getElementById("blo1").setAttribute("src","NULL")
            document.getElementById("co1").setAttribute("src","NULL")
            document.getElementById("ar1").setAttribute("src","NULL")
        alert("Game Over!!!");

    }},10);



function jump(){
    if(num!=1)
    {
       if(character.classList != "animate"){

        character.classList.add("animate");
    }  
    setTimeout(function(){
        character.classList.remove("animate");
    },500); 
    }
    
}

    //need to  use use span result to collect coin\\ span.textcontent = `result is ${result}` to show while player lose the game.

    //define vars to hold time values

    let mseconds =0;
    let seconds =0;
    let minutes =0;

    //define vars to hold "display" value

    let displayMSeconds =0;
    let displaySeconds =0;
    let displayMinutes =0;

    // stopwatch funtion {logic to determine when to increment next value}
    function stopwatch()
{

    mseconds++;
    //logic to determine when to increment next value
 if(num!=1)
 {
    if(mseconds /60===1)
    {
        mseconds=0;
        seconds++;

        if(seconds/60=== 1)
        {
            seconds=0;
            minutes++;
        }
    }

    //if mseconds/seconds/minutes are only one digits, add a leading 0 to the value

    if(mseconds<10)
    {
        displayMSeconds="0" + mseconds.toString();

    }
    else
    {
        displayMSeconds = mseconds;
    }

    if(seconds<10)
    {
        displaySeconds = "0" + seconds.toString();
    }
    else
    {
        displaySeconds=seconds;
    }


    if(minutes<10)
    {
        displayMinutes="0" + minutes.toString();

    }
    else
    {
        displayMinutes=minutes;
    }
    
    //display updated time values to user
    document.getElementById("display").innerHTML= displayMinutes +":"+ displaySeconds + ":" +  displayMSeconds;

 }
    

}

window.setInterval(stopwatch,10);



let mlevel=0;
let slevel=0;
let level=0;
let Dlevel=0;

function levelupgrade()
{
   mlevel++;

    if(num!=1)
    {
         
         if(mlevel/60===1)
    {
        mlevel=0;
        slevel++;
        if(slevel/60===1)
        {
            slevel=0;
            level++;
        }
    }


    if(level<10)
    {
        Dlevel="0"+level.toString();
    }
    else
    {
        Dlevel=level;
    }
    document.getElementById('score').innerHTML=Dlevel;
    
}
    }
window.setInterval(levelupgrade,10)


