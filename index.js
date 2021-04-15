import { randomCuriosity } from './js/randomCuriosity';
import { takeShot } from './js/takeShot';
import { share } from './js/share';
import { suggestion } from './js/suggestion.js'

document.querySelector('#newCuriosity').addEventListener('click', randomCuriosity);
document.querySelector('#takeShot').addEventListener('click', takeShot);
document.querySelector('#share').addEventListener('click', share);
document.querySelector('#suggestion').addEventListener('click', suggestion);

document.addEventListener("DOMContentLoaded",function() {
  randomCuriosity();
});
