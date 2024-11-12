let theDominik = document.getElementById("theDominik");
let brockCard = document.getElementById("brockCard");
let domImg = document.getElementById("domImg");
let awaitChange1 = document.getElementById("awaitChange1");
let awaitChange2 = document.getElementById("awaitChange2");
let awaitChange3 = document.getElementById("awaitChange3");
let awaitChange4 = document.getElementById("awaitChange4");
let awaitChange5 = document.getElementById("awaitChange5");
let awaitChange6 = document.getElementById("awaitChange6");
let awaitChange7 = document.getElementById("awaitChange7");
let awaitChange8 = document.getElementById("awaitChange8");


let domBtn = document.getElementById("domBtn");
let cardBtn = document.getElementById("cardBtn");
let changeBtn1 = document.getElementById("changeBtn1");
let changeBtn2 = document.getElementById("changeBtn2");
let changeBtn3 = document.getElementById("changeBtn3");
let changeBtn4 = document.getElementById("changeBtn4");
let changeBtn5 = document.getElementById("changeBtn5");
let changeBtn6 = document.getElementById("changeBtn6");
let changeBtn7 = document.getElementById("changeBtn7");
let changeBtn8 = document.getElementById("changeBtn8");



domBtn.addEventListener("click", function(){
    theDominik.innerHTML= "You've manipulated the DOMinik Mysterio!";
    theDominik.className = "barrelRoll";

    domImg.className = "domImage " + "fadeIn";
});

cardBtn.addEventListener("click", function(){
    brockCard.className = "moveCard " + "rollerRight";
});

changeBtn1.addEventListener("click", function(){
    awaitChange1.innerHTML = "I am now a titan."
    awaitChange1.className = "change1 " + "floater"
});

changeBtn2.addEventListener("click", function(){
    awaitChange2.innerHTML = "I CAN'T STOP SPINNING!"
    awaitChange2.className = "change2 " + "spinner"
});