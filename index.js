import { randomCuriosity } from './js/randomCuriosity';
import { takeShot } from './js/takeShot';
import { share } from './js/share';

document.querySelector('#newCuriosity').addEventListener('click', randomCuriosity);
document.querySelector('#takeShot').addEventListener('click', takeShot);
document.querySelector('#share').addEventListener('click', share);

document.addEventListener("DOMContentLoaded",function() {
  randomCuriosity();
});
