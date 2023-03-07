// Synchronous function that returns the sum of two numbers
function add() {
    console.log("A function is called synchronously, meaning that the calling code will block until the function returns a value or completes execution.");
  }
  
add() 

const EventEmitter = require('events');

// Create an event emitter object
const emitter = new EventEmitter();

//event with 'example' as name
emitter.on('example',()=> {
  console.log(`An event emitter is used to trigger an event that can be handled asynchronously by one or more event listeners.`);
});

//event is called or emitted
emitter.emit('example');