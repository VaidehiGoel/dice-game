var randomNumber1=Math.floor(Math.random()*5)+1;
var randomNumber2=Math.floor(Math.random()*5)+1;
var randomImage1="dice"+randomNumber1+".png";
var randomImage2="dice"+randomNumber2+".png";
var randomImageS1="images/"+randomImage1;
var randomImageS2="images/"+randomImage2;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageS1); 
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageS2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!!";
}
else if(randomNumber2>randomNumber1){
        document.querySelector("h1").innerHTML="Player 2 Wins!!";

}
else{
        document.querySelector("h1").innerHTML="Draw :)";

}