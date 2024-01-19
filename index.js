// Code your solutions in this file
// Define a function that returns an array of thank you messages for each name provided to the function
function writeCards(names, event) {
    // Declare an empty array to store the messages
    let messages = [];
  
    // Loop through the names array
    for (let i = 0; i < names.length; i++) {
      // Create a message for each name using template literals
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  
      // Push the message to the messages array
      messages.push(message);
    }
  
    // Return the messages array
    return messages;
  }
  
  // Define a function that invokes console.log once for each number, counting down from the number provided to zero
  function countDown(number) {
    // Use a while loop to iterate from the number to zero
    while (number >= 0) {
      // Log the current number to the console
      console.log(number);
  
      // Decrement the number by one
      number--;
    }
  }