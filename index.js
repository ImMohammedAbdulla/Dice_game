var d1 = Math.random();
d1 = Math.floor(d1 * 6) + 1;

var d2 = Math.random();
d2 = Math.floor(d2 * 6) + 1;

var a = document.querySelector(".container h1");
var x1="images/dice"+d1+".png";
var x2="images/dice"+d2+".png";
var i1 = document.querySelectorAll("img")[0];
var i2 = document.querySelectorAll("img")[1];

i1.setAttribute("src",x1);
i2.setAttribute("src",x2);

if (d1 > d2) {
  a.innerHTML = "Player1 Wins!";
} else if (d1 === d2) {
  a.innerHTML = "Its a Draw!";
} else {
  a.innerHTML = "Player2 Wins!";
}


