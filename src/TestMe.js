'use strict'

function TestMe() {
    var count = 0;
    var interval = setInterval(() => {
        console.log('Hello World!');
        if (count >= 1) {
            clearInterval(interval);
        } else {
            count++;
        }
    }, 1000);
}

module.exports = TestMe;
