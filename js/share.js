export function share(){
  window.open('https://api.whatsapp.com/send?text=' + document.getElementById("textDesc").innerText + ' ' + 'Mais curiosidades em: https://matheusagcosta.github.io/curiosidades-linguisticas/')
}

