let btn=document.getElementById('generate-btn')
var limit=1
var getjoke="Getting Joke..."
var jokes=document.getElementById('jokes')
function generateJoke(){
    jokes.innerHTML=getjoke
    jokes.style.color="rgba(255,255,255,0.3)"
    fetch(`https://api.api-ninjas.com/v1/dadjokes?limit=${limit}`,{
        method:"GET",
        headers:{
            'X-Api-Key': '52yLyjHNAi7EAvUfu/lrvg==0bFveDNyVvyeeZ3P',
            'Content-Type':"application/json"
        }
    }).then((res)=>res.json()).then((data)=>{
        jokes.innerHTML=JSON.stringify(data[0].joke)
        jokes.style.color="white"
        // console.log(data);
    })
    .catch((error)=>jokes.innerHTML="Something Wrong...")
}
btn.addEventListener('click',generateJoke)

window.addEventListener("load",generateJoke);