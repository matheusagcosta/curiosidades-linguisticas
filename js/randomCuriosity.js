import { contents } from "../data/contents.json"
import { backColor, fontColor } from "../data/colors.json"

export function randomCuriosity() {
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
