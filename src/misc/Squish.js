define(function (require, exports, module) {
	'use strict';

	var serialport = require('serialport'),
	SerialPort = serialport.SerialPort,
	portName = process.argv[1];

	var serialData = 0;  

	var port = new SerialPort(portName, {
		baudRate: 9600,
		parser:serialport.parsers.readline('\r\n')
	});

	port.on('open', showPortOpen);
	port.on('data', saveLatestData);
	port.on('close', showPortClose);
	port.on('error', showError);

	function showPortOpen() {
		console.log('Port open. Data rate: ' + port.options.baudRate);
	}

	function saveLatestData(data) {
		console.log(data);
		serialData = data;
	}

	function showPortClose() {
		console.log('Port closed.');
	}

	function showError(error) {
		console.log('Serial port error: ' + error);
	}

});