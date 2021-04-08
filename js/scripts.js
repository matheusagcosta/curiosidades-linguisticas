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

window.onload=randomCuriosity

function newCuriosity(){ 
  randomCuriosity()
}

function randomCuriosity(){
  var calc = parseInt(Math.random() * 6 ) 
  contentCalc = contents[calc]
  backColorCalc = backColor[calc]
  fontColorCalc = fontColor[calc]

  textName = document.getElementById("text--name").innerHTML=`${contentCalc.split(' ')[0]}`
  textContent = document.getElementById("text--content").innerHTML=`${contentCalc}`
  backGroundChange = document.getElementById("body").style.backgroundColor=`${backColorCalc}`
  fontChange = document.getElementById("text--content").style.color=`${fontColorCalc}`
  backGroundChange = document.getElementById("container").style.backgroundColor=`${backColorCalc}`
}
function takeShot(){
    html2canvas(document.getElementById('container')).then( canvas => {
    let url = canvas.toDataURL("image/png");
    let screenDown = document.getElementById("screen__preview")
    screenDown.href = url;
    screenDown.click()
})
}

