import html2canvas from 'html2canvas';

export function takeShot() {
  html2canvas(document.getElementById('container')).then( canvas => {
    let url = canvas.toDataURL("image/png");
    let screenDown = document.getElementById("screen__preview")
    screenDown.href = url;
    screenDown.click()
  })
}
