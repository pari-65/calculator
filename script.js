// Clear the display
function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

// Backspace function to remove the last character
function backspace() {
    let display = document.getElementById('display').textContent;
    
    // Remove the last character if the display is not empty
    if (display.length > 1) {
        document.getElementById('display').textContent = display.slice(0, -1);
    } else {
        document.getElementById('display').textContent = '0'; // If only one character, reset to '0'
    }
}

// Append value to the display
function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// Calculate and display the result
function calculateResult() {
    let display = document.getElementById('display').textContent;
    try {
        // Evaluate the expression and handle multiplication and division symbols
        display = display.replace('×', '*').replace('÷', '/');
        document.getElementById('display').textContent = eval(display);
    } catch (error) {
        document.getElementById('display').textContent = 'Error';
    }
}
