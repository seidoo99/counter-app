//Finish the code below to make the counter increment everytime you press the button
//Also, write the listener for the decrement button so that the counter decrements when you click it
var incrementButton = document.getElementById('increment');
var decrementButton = document.getElementById('decrement');
var resetButton = document.getElementById('reset');
var counter = document.getElementById('counter');
///const axios = require('axios');//browser doesn't support require
var count = axios.get('/value').then(function(response) {
    counter.innerHTML = response.data
}); // This variable holds the current value of the counter!


incrementButton.addEventListener('click', function() {
    var increment = axios.post('/increment').then(function(response) {
            counter.innerHTML = response.data
        })
        /*
        count += 1;
        counter.innerHTML = count;
        */
});

decrementButton.addEventListener('click', function() {
    var decrement = axios.post('/decrement').then(function(response) {
            counter.innerHTML = response.data
        })
        /*
        count -= 1;
        counter.innerHTML = count;
        */
});

resetButton.addEventListener('click', function() {
    var reset = axios.post('/reset').then(function(response) {
        counter.innerHTML = response.data
    })
})