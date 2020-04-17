// change require to es6 import style
import $ from 'jquery';
import './style.scss';

console.log('starting up');

let num = 0;
function setCounter() {
  $('#main').html(`You've been on this page for ${num} seconds.`);
  num += 1;
}

setInterval(setCounter, 1000);
