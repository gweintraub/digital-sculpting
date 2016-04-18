var serialport = require('serialport');// include the library
   SerialPort = serialport.SerialPort; // make a local instance of it
   // get port name from the command line:
   portName = process.argv[1];
   var myPort = new SerialPort(portName, {
      baudRate: 9600,
      // look for return and newline at the end of each data packet:
      parser: serialport.parsers.readline("\n")
    });
   console.log("Connected");

   myPort.on('open', showPortOpen);
   myPort.on('data', sendSerialData);
   myPort.on('close', showPortClose);
   myPort.on('error', showError);

   function showPortOpen() {
      console.log('port open. Data rate: ' + myPort.options.baudRate);
   }
    
   function sendSerialData(data) {
      console.log(data);
   }
    
   function showPortClose() {
      console.log('port closed.');
   }
    
   function showError(error) {
      console.log('Serial port error: ' + error);
   }