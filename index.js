'use strict';
const fs = require('fs');
const wordListPath = require('word-list');

let list = [];

function getList() {
    return fs.readFileSync(wordListPath, 'utf8').split(/\r\n/m);
}

function rando(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = function(count, delimiter) {
    count = !Number.isInteger(count) || count < 1 ? 1 : count;
    delimiter = !delimiter ? '' : delimiter;
   
    let min = 0;
    let a = [];
    for(var i = 0; i < count; i++) {
		if(list.length === 0)
            list = getList();
        let max = list.length;
        let index = rando(min, max);
        
        let word = list.splice(index, 1);
        a.push(word);
    }
    return a.join(delimiter);
}
