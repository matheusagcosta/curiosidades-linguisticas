var backColor = ["#833E3E","#3E4D83","#50833E","#793E83","#3E8383","#837C3E"]
var fontColor = ["#D6DDA8","#DDA8B2","#A8D0DD","#BFDDA8","#D6A8DD","#FFAAAA"]
var names = ["Banguela" , "AAAA", "BBBB", "CCCC", "DDDD", "EEEE"]
var contents = [
  "surgiu dos escravos africanos que vinham da região de Benguela na Angola e arrancavam os seus dentes para identificação na hora da venda.",
  "aaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaa",
  "bbbbbbb bbbbbbbbbbbbbbb bbbbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbbb",
  "cccccccccc ccccccccccc cccccccccccc ccccc cccccccc ccccccccccccc",
  "dddddd ddddddddddd dddddddddddd ddddd dddddd ddddddd ddddd dddddddd",
  "eeeeeee eeeeeeeeeeeeeeeee eeeeeeeeeeee eeeeeee eeeeee eeeeeeeeeee",
]
window.onload = initPage
function initPage(){
  var calc = parseInt(Math.random() * 6 ) 
  nameCalc = names[calc]
  contentCalc = contents[calc]
  backColorCalc = backColor[calc]
  fontColorCalc = fontColor[calc]

  var textname = document.getElementById("text--name").innerHTML=`${nameCalc}`
  var textcontent = document.getElementById("text--content").innerHTML=`${contentCalc}`
  var backGroundChange = document.getElementById("body__specs").style.backgroundColor=`${backColorCalc}`
  var fontChage = document.getElementById("text--content").style.color=`${fontColorCalc}`
}

function newCuriosity(){
  var calc = parseInt(Math.random() * 6 ) 
  nameCalc = names[calc]
  contentCalc = contents[calc]
  backColorCalc = backColor[calc]
  fontColorCalc = fontColor[calc]

  var textname = document.getElementById("text--name").innerHTML=`${nameCalc}`
  var textcontent = document.getElementById("text--content").innerHTML=`${contentCalc}`
  var backGroundChange = document.getElementById("body__specs").style.backgroundColor=`${backColorCalc}`
  var fontChage = document.getElementById("text--content").style.color=`${fontColorCalc}`
}
