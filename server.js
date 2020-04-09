var express = require('express')
var ping = express()
var port = 3001

var num = 0;

ping.post('/increment', (req, res) => { 
    num++; 
    res.send('Count is now increased by ' + '' + num);

})

ping.post('/decrement', (req, res) => { 
    num--; 
    res.send('Count is decreased by ' + '' + num);
    
})

ping.get('/value', (req, res) => { res.send('Count is current' + num)
});

ping.listen(port, () => console.log(`Current num at http://localhost:${port}`)) 
