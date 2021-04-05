var color1 = {
  background:"#833E3E",
  font:"#D6DDA8"
}
var color2 = {
  background:"#3E4D83",
  font:"#DDA8B2"
}
var color3 = {
  background:"#50833E",
  font:"#A8D0DD"
}
var color4 = {
  background:"#793E83",
  font:"#BFDDA8"
}
var color5 = {
  background:"#3E8383",
  font:"#D6A8DD"
}
var color6 = {
  background:"#837C3E",
  font:"#FFAAAA"
}



var Banguela = {
  name:"Banguela",
  content:"surgiu dos escravos africanos que vinham da região de Benguela na Angola e arrancavam os seus dentes para identificação na hora da venda."
}
var AAAA = {
  name:"AAAA",
  content:"aaaaaaaa"
}
var BBBB = {
  name:"BBBB",
  content:"bbbbbbbb"
}
var CCCC = {
  name:"CCCC",
  content:"cccccccc"
}
var DDDD = {
  name:"DDDD",
  content:"dddddddd"
}
var EEEE = {
  name:"EEEE",
  content:"eeeeeeee"
}

var textCalc
var colorCalc
var texts = [Banguela, AAAA, BBBB, CCCC, DDDD, EEEE]
var colors = [color1, color2, color3, color4, color5, color6]

function newCuriosity(){
  var calc = parseInt(Math.random() * 6 ) 
  textCalc = texts[calc]
  colorCalc = colors[calc]

  var textname = document.getElementById("text--name").innerHTML=`${textCalc.name}`
  var textcontent = document.getElementById("text--content").innerHTML=`${textCalc.content}`
  var backGroundChange = document.getElementById("body__specs").style.backgroundColor=`${colorCalc.background}`
  var fontChage = document.getElementById("text--content").style.color=`${colorCalc.font}`
}
newCuriosity()
