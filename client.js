var swg = require('swg')

var app = swg({
    verbose: true
});

app.on('0002', function(req, res) {
	console.log('in 0002');
});

app.send('00010000000258b026ca000001f0', 44453, '127.0.0.1');
app.send('000900000400961F13410800757365726E616D65080070617373776F72640E0032303035303430382D31383A3030288D', 44453, '127.0.0.1');
//0007BFB90000000000000000000000000000000000000000000000000000000200000000000000017571
//000900000400961F13410800757365726E616D65080070617373776F72640E0032303035303430382D31383A30302855

