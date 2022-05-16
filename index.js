

var randomNumber1=Math.floor(Math.random()*6)+1;
var dex1="images/dice"+randomNumber1+".png";

    document.querySelectorAll("img")[0].setAttribute("src",dex1);

var randomNumber2=Math.floor(Math.random()*6)+1;

var dex2="images/dice"+randomNumber2+".png";

    document.querySelectorAll("img")[1].setAttribute("src",dex2);

if(randomNumber2===randomNumber1){
    document.querySelector("h1").textContent="DRAW !!";
}
if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent="PLAYER 2 WIN";
}
if(randomNumber2<randomNumber1){
    document.querySelector("h1").textContent="PLAYER 1 WIN";
}
