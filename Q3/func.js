// Get the display element
const display = document.getElementById('display');

// Add event listeners to the buttons
document.getElementById('add').addEventListener('click', function() {
  // Get the current value of the display
  const currentValue = display.value;

  // Add the number 1 to the current value
  const newValue = currentValue + 1;

  // Set the display value to the new value
  display.value = newValue;
});

document.getElementById('subtract').addEventListener('click', function() {
  // Get the current value of the display
  const currentValue = display.value;

  // Subtract the number 1 from the current value
  const newValue = currentValue - 1;

  // Set the display value to the new value
  display.value = newValue;
});

// Add event listeners for the other buttons
// ...

// Add an event listener for the equals button
document.getElementById('equals').addEventListener('click', function() {
  // Get the current value of the display
  const currentValue = display.value;

  // Evaluate the expression in the display
  const result = eval(currentValue);

  // Set the display value to the result
  display.value = result;
});

// Add an event listener for the clear button
document.getElementById('clear').addEventListener('click', function() {
  // Set the display value to 0
  display.value = 0;
});
