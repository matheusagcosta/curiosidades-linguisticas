import { contents } from "../data.json"

export function randomCuriosity() {
  var backColor = ["#833E3E","#3E4D83","#50833E","#793E83","#3E8383","#837C3E"]
  var fontColor = ["#D6DDA8","#DDA8B2","#A8D0DD","#BFDDA8","#D6A8DD","#FFAAAA"]
  
  var colorCalc = parseInt(Math.random() * backColor.length)
  var textCalc = parseInt(Math.random() * contents.length)

  var backColorCalc = backColor[colorCalc]
  var fontColorCalc = fontColor[colorCalc]
  var contentCalc = contents[textCalc]
  
  document.getElementById("textDesc").innerHTML=`${contentCalc}`
  document.getElementById("container").style.backgroundColor=`${backColorCalc}`
  document.getElementById("textDesc").style.color=`${fontColorCalc}`

  return;
}
