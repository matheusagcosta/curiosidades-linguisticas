var backColor = ["#833E3E","#3E4D83","#50833E","#793E83","#3E8383","#837C3E"]
var fontColor = ["#D6DDA8","#DDA8B2","#A8D0DD","#BFDDA8","#D6A8DD","#FFAAAA"]
var contents = [
  "Banguela surgiu dos escravos africanos que vinham da região de Benguela na Angola e arrancavam os seus dentes para identificação na hora da venda.",
  "AAAA aaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaa",
  "BBBB bbbbbbb bbbbbbbbbbbbbbb bbbbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbbb",
  "CCCC cccccccccc ccccccccccc cccccccccccc ccccc cccccccc ccccccccccccc",
  "DDDD dddddd ddddddddddd dddddddddddd ddddd dddddd ddddddd ddddd dddddddd",
  "EEEE eeeeeee eeeeeeeeeeeeeeeee eeeeeeeeeeee eeeeeee eeeeee eeeeeeeeeee",
]

window.onload = initPage
function initPage(){
  var calc = parseInt(Math.random() * 6 ) 
  contentCalc = contents[calc]
  backColorCalc = backColor[calc]
  fontColorCalc = fontColor[calc]

  var textName = document.getElementById("text--name").innerHTML=`${contentCalc.split(' ')[0]}`
  var textContent = document.getElementById("text--content").innerHTML=`${contentCalc}`
  var backGroundChange = document.getElementById("body").style.backgroundColor=`${backColorCalc}`
  var fontChange = document.getElementById("text--content").style.color=`${fontColorCalc}`
}

function newCuriosity(){
  var calc = parseInt(Math.random() * 6 ) 
  contentCalc = contents[calc]
  backColorCalc = backColor[calc]
  fontColorCalc = fontColor[calc]

  var textName = document.getElementById("text--name").innerHTML=`${contentCalc.split(' ')[0]}`
  var textContent = document.getElementById("text--content").innerHTML=`${contentCalc}`
  var backGroundChange = document.getElementById("body").style.backgroundColor=`${backColorCalc}`
  var fontChange = document.getElementById("text--content").style.color=`${fontColorCalc}`
  var backGroundChange = document.getElementById("container").style.backgroundColor=`${backColorCalc}`
  
}      
function takeShot(){
  let div = document.getElementById("container")
  html2canvas(div).then(
  function(canvas){
    document
    .getElementById('screen__preview')
    .appendChild(canvas)
  var display = document.getElementById("screen__preview").style.display;
  if (display == "none"){
    document.getElementById("screen__preview").style.display = "block";
  }
})
}
