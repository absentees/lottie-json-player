const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}
var player = document.getElementById("player");

var json = '';

document.querySelector('#load').addEventListener('click',function(){
  json = document.getElementById("jsonInput").value;

  console.log(json);
  
  bodymovin.loadAnimation({
    wrapper: player,
    animType: "svg",
    loop: true,
    animationData: JSON.parse(json)
  });
})
