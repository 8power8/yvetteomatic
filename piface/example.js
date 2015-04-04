// https://www.npmjs.com/package/piface-node

var pfio = require('piface-node');

pfio.init();
//var foo = pfio.digital_read(0); // (pin; returns state)
//pfio.deinit();

var on = false;
var states = {s0:'0', s1:'0', s2:'0', s3:'0'};

function blink()
{
	if(on)
	{
		on = false;
		pfio.digital_write(0,1);
	}
	else
	{
		on = true;
		pfio.digital_write(0,0);
	}
	
}

// Watches for state changes
function watchInputs() {

	for(var i = 0; i < 4; i++)
	{

		var old_state = states['s' + i]
		var new_state = pfio.digital_read(i);

		if(old_state != new_state)
		{
			states['s' + i] = new_state;
			console.log('input# ' + i + ' : ' + states['s' + i]);

			pfio.digital_write(i, new_state);
		}
	}

	
	setTimeout(watchInputs, 10);
}

watchInputs();
//setInterval(blink, 1000);