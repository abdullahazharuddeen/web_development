const makeCake_promises=(isCasseySick,numberoFCake)=>
{
    return new Promise((resolve,reject)=>
    {
        if(isCasseySick==false)
        {
            setTimeout(()=>
            {
                resolve(numberoFCake)
            },2000)
        }
        else 
        {
            reject(console.log("😞"));

        }
    })

};

makeCake_promises(false,4)
    .then((numberoFCake)=>
        {
            console.log('I have',numberoFCake, 'cakes 🍰');
        })
        .catch(()=>
        {console.log("😞");
        })
        .finally(()=>{console.log('finally cassey is not sick enjoy the party 🎊 and cakes 🎂 ')})