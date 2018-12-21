//variable for the number of digs made
var digAttempts=0;
//detector sounds so searcher knows where to dig
var arr=["beep,beep,beep",  "hiss","beep","hiss","hiss","beep","hiss","hiss","hiss","beep","hiss","hiss","hiss","hiss","hiss","hiss","beep","pop","hiss", "beep","beep hiss", "hiss","hiss"];

//array of items that might be found
var digArr=["bottle cap", "rusty nail", "it's the gold ring.", "broken key", "nothin'", "washer", "bottle cap", "key ring with no key", "cuff link? who?", "toy truck","washer"];

//pulls a random item from the item list
function reader() {
  digAttempts++;
  var x = Math.floor((Math.random() * 10) + 1);
  
  alert(digArr[x]);
  //if the ring is found end game
  if (x==2) {
    alert (" You did it! Aunt Susie is thrilled. Click to play again.");
    digAttempts=0;
  }
  //check if they have reach max digs
  if (digAttempts>5){
    alert("You've made your maximum number of digs. Sorry. Click to play again.")
    digAttempts=0;
  }
  
};
//keep the searcher away from bather
function peeper(){
  alert("Watch it, creep! I'm sunbathing.")
}
//keep searcher out of the water
function swimmer(){
  alert("I'm the cheap version; keep me out of the water.")
}
//points out beach trash
function junk(){
  alert("just an old frisbee");
}
//changes detector sounds from the array
function readPlot(){
  var soundVarArr = Math.floor((Math.random() * 10) + 1);
  var soundResult =arr[soundVarArr];
  document.getElementById('detector').innerHTML=soundResult;
}

function startGame(){
  document.getElementsByClassName("welcome")[0].style.display = "none";
 document.getElementsByClassName("container")[0].style.visibility = 'visible';
}

