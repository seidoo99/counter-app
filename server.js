var express = require('express')
var app = express()
    //var axios = require('axios');
var port = 3001
app.use(express.static(__dirname + '/counter-app/public'));
var num = 0;

app.post('/increment', (req, res) => {
    num++;
    res.send('Count is now increased by ' + '' + num);

})

app.post('/decrement', (req, res) => {
    num--;
    res.send('Count is decreased by ' + '' + num);

})

app.post('/reset', (req, res) => {
    num = 0;
    res.send('Count is now ' + '' + num);
});

app.get('/value', (req, res) => {
    res.send('Count is currently' + '' + num);
});

app.listen(port, () => console.log(`Current num at http://localhost:${port}`))