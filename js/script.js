// Interactive Feature 1: Change background color on button click
document.getElementById('colorBtn').addEventListener('click', function() {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});

// Interactive Feature 2: Counter with increment and decrement buttons
let counter = 0;
const counterValue = document.getElementById('counterValue');
document.getElementById('incrementBtn').addEventListener('click', function() {
    counter++;
    counterValue.textContent = counter;
});
document.getElementById('decrementBtn').addEventListener('click', function() {
    counter--;
    counterValue.textContent = counter;
});

// Custom Form Validation (no HTML5-only validation)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const errorDiv = document.getElementById('formError');
    let errorMsg = '';

    // Validate name (must not be empty)
    if (name.length === 0) {
        errorMsg += 'Name is required.<br>';
    }

    // Validate email (simple regex)
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        errorMsg += 'Please enter a valid email address.<br>';
    }

    if (errorMsg) {
        errorDiv.innerHTML = errorMsg;
        errorDiv.style.display = 'block';
    } else {
        errorDiv.style.display = 'none';
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
    }
});