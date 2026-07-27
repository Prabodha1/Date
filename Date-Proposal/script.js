const yesBtn =
document.getElementById("yesBtn");


const noBtn =
document.getElementById("noBtn");




// NO button escape

noBtn.addEventListener(
"mouseover",
()=>{


let x =
Math.random()*300;


let y =
Math.random()*300;



noBtn.style.left =
x+"px";


noBtn.style.top =
y+"px";


});






// YES button


yesBtn.onclick=function(){


createConfetti();



document.getElementById("main").innerHTML =


`

<h1>
Yay!! ❤️🥰
</h1>


<p>
Choose our perfect date
</p>



<p>
📅 Date
</p>


<input 
type="date"
id="date">



<p>
🕒 Time
</p>


<input 
type="time"
id="time">



<p>
📍 Place
</p>


<input
type="text"
id="place"
placeholder="Enter your favourite place ❤️">



<br>


<button id="confirm">

Save Our Date ❤️

</button>


`;




document
.getElementById("confirm")
.onclick=function(){



let date =
document.getElementById("date").value;


let time =
document.getElementById("time").value;


let place =
document.getElementById("place").value;



if(!date || !time || !place){

alert(
"Please choose date, time and place ❤️"
);

return;

}



// Save data

localStorage.setItem(
"date",
date
);


localStorage.setItem(
"time",
time
);


localStorage.setItem(
"place",
place
);



showTicket(
date,
time,
place
);



};



};






// Show ticket


function showTicket(date,time,place){



document.getElementById("main").innerHTML =


`

<h1>
❤️ Our Date is Confirmed ❤️
</h1>



<div id="ticket">


<h2>
🎟 Date Ticket
</h2>


<p>
📅 ${date}
</p>


<p>
🕒 ${time}
</p>


<p>
📍 ${place}
</p>


</div>



<div class="countdown" id="countdown">

Loading...

</div>



<h2>
I can't wait to see you 🥰
</h2>


`;



startCountdown(
date,
time
);


}








// Countdown


function startCountdown(date,time){



let dateParts =
date.split("-");


let timeParts =
time.split(":");



let target =
new Date(

dateParts[0],

dateParts[1]-1,

dateParts[2],

timeParts[0],

timeParts[1],

0

);





let timer =
setInterval(()=>{


let now =
new Date();


let difference =
target-now;



if(difference<=0){


document
.getElementById("countdown")
.innerHTML =
"❤️ Today is our special day ❤️";


clearInterval(timer);

return;

}




let days =
Math.floor(
difference/
(1000*60*60*24)
);



let hours =
Math.floor(
difference/
(1000*60*60)%24
);



let minutes =
Math.floor(
difference/
(1000*60)%60
);



let seconds =
Math.floor(
difference/
1000%60
);





document
.getElementById("countdown")
.innerHTML =


`

❤️ Our Date Starts In ❤️

<br><br>

${days} Days

<br>

${hours} Hours

<br>

${minutes} Minutes

<br>

${seconds} Seconds


`;



},1000);


}








// Confetti


function createConfetti(){


for(let i=0;i<120;i++){


let c =
document.createElement("div");


c.className="confetti";


c.style.left =
Math.random()*100+"vw";


c.style.background =
"hsl("+Math.random()*360+",80%,60%)";


c.style.animationDuration =
2+Math.random()*3+"s";



document.body.appendChild(c);



setTimeout(()=>{

c.remove();

},5000);



}


}








// Hearts


function createHeart(){


let heart =
document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left =
Math.random()*100+"vw";


heart.style.animationDuration =
5+Math.random()*5+"s";



document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},8000);


}


setInterval(
createHeart,
500
);







// Rose petals


function createPetal(){


let petal =
document.createElement("div");


petal.className="petal";


petal.innerHTML="🌹";


petal.style.left =
Math.random()*100+"vw";


petal.style.animationDuration =
5+Math.random()*5+"s";


document.body.appendChild(petal);



setTimeout(()=>{

petal.remove();

},10000);



}


setInterval(
createPetal,
800
);