// Code your solutions in this file
// index.js

// Function to generate thank you messages for each name provided
function writeCards(messages){
    let thankYouMessages = [];
    // Loop through the array of names and create a new card for each one
    for (let i=0; i<messages.length; i++){
        thankYouMessages.push(`Thank you, ${messages[i]}, for the wonderful surprise gift!`); 
    }
   return thankYouMessages;
}

// Function to handle user input from form submission
function countDown(number){
    for (let i=number; i>=0; i--){
        console.log(i);
    }
}

console.log(countDown(100))