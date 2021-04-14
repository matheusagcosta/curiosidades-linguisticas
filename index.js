import { randomCuriosity } from './js/randomCuriosity';
import { takeShot } from './js/takeShot';

document.querySelector('#newCuriosity').addEventListener('click', randomCuriosity);
document.querySelector('#takeShot').addEventListener('click', takeShot);

document.addEventListener("DOMContentLoaded",function() {
  randomCuriosity();
});
