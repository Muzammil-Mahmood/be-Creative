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


const timer = select('.timer')