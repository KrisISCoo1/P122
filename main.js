x = 0;
y = 0;
i = 1
screen_width=0
screen_height=0
draw_apple = "";
speak_data="";
to_number="";
screen_width=window.innerWidth
screen_height=window.innerHeight
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
recognition.onresult = function(event) {
 console.log(event); 
 content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
}
createCanvas(screen_width, screen_height-150){
}
function setup() {
  screen_width=window.innerWidth;
  screen_height=window.innerHeight;
}
function canvas.position() {
  
}
function preload() {
  loadImage(draw_apple)
}
function draw() {
  to_number=Number(content);
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for (let i = 0; i < to_number; i++) {
      x=Math.floor(Math.random()*700)
      y=Math.floor(Math.random()*400)
      image(apple)(x,y)(width,height)
      document.getElementById("status").innerHTML=to_number+"apples drawn"
      speak()
    }
  }
  else{
    console.log("the speech has not recognized a number")
  }
}
function speak(){
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    speak_data = "";
}
