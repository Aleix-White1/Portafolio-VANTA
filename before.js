// const frases = ["Hello ;)", "Select lenguage"];

// let index = 0;
// let intervalID;
// function changeText(){
//     document.getElementById('titlePrincipal').textContent = frases[index];
//     index = (index + 1) % frases.length;

//     if(index === 0){
//         clearInterval(intervalID);
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     changeText();
//     intervalID = setInterval(changeText, 2000); 
// });


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 1000;

var party = SmokeMachine(ctx, [54, 16.8, 18.2]);

party.start();
party.addSmoke(10000,10000,10000);

setTimeout(function(){

    party.stop() // stop animating

    party.addSmoke(600,500,100)
    party.addSmoke(500,600,20)

    for(var i=0;i<10;i++){
        party.step(10) // pretend 10 ms pass and rerender
    }

    setTimeout(function(){
        party.start()
    },1000)

},1000)
    
