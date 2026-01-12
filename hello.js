// JavaScript for hello.html

function init() {
    // Create a button element
    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    button.id = 'myButton';
    button.style.marginTop = '10px';
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';

    // Add click event listener
    button.addEventListener('click', function() {
        alert('Hello! You clicked the button!');
        // You can add more functionality here
    });

    // Add the button to the body
    document.body.appendChild(button);

    // Add keyboard event listener for letter keys
    window.addEventListener('keydown', function(event) {
        // Check if the pressed key is a letter (a-z or A-Z)
        if (/^[a-zA-Z]$/.test(event.key)) {
            alert('You pressed the letter: ' + event.key.toUpperCase());
        }
    });
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);