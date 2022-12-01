'use strict';

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
  }
  
  function select(selector, parent = document) {
    return parent.querySelector(selector);
  }

  export { onEvent, select };


  
 /* function selectAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
  }
  
  function create(element, parent = document) {
    return parent.createElement(element);
  }
  
  function print(element) {
    console.log(element);
  }
  
 export { onEvent, select, selectAll, create, print };
 */

/**
 * Classes
 */

class Score {
    #date;
    #hits;
    #percentage;

    constructor(date, hits, percentage) {
        this.#date = date;
        this.#hits = hits;
        this.#percentage = percentage;
    }

    get date() {
        return this.#date;
    }

    get hits() {
        return this.#hits;
    }

    get percentage() {
        return this.#percentage;
    }

}

export { Score };


const watch = select('.watch');
const second = select('.second');
const score = select('.score');
const points = select('.points');
const game = select('.game');
const sample = select('.sample');
const text = select('.text');
const btn = select('.btn');

const energetic = new Audio('./assets/media/audio/music.m4a');
energetic.type = 'audio/m4a';


const data = ['dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 'population', 
'weather', 'bottle', 'history', 'dream', 'character', 'money', 'absolute', 
'discipline', 'machine', 'accurate', 'connection', 'rainbow', 'bicycle', 
'eclipse', 'calculator', 'trouble', 'watermelon', 'developer', 'philosophy', 
'database', 'periodic', 'capitalism', 'abominable', 'component', 'future', 
'pasta', 'microwave', 'jungle', 'wallet', 'canada', 'coffee', 'beauty', 'agency', 
'chocolate', 'eleven', 'technology', 'alphabet', 'knowledge', 'magician', 
'professor', 'triangle', 'earthquake', 'baseball', 'beyond', 'evolution', 
'banana', 'perfumer', 'computer', 'management', 'discovery', 'ambition', 'music', 
'eagle', 'crown', 'chess', 'laptop', 'bedroom', 'delivery', 'enemy', 'button',
'superman', 'library', 'unboxing', 'bookstore', 'language', 'homework', 
'fantastic', 'economy', 'interview', 'awesome', 'challenge', 'science', 'mystery', 
'famous', 'league', 'memory', 'leather', 'planet', 'software', 'update', 'yellow', 
'keyboard', 'window'];



function timer(){
  let sec = 30;
  let timer = setInterval(function(){
      document.getElementsByClassName('second').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
      }
  }, 1000);
}

window.onload = function () {
  let time = 60 / 2, // your time in seconds here
      display = document.querySelector('#second');
  startTimer(time, display);
};