document.getElementById('numberInput').addEventListener('input', function (e) {
    const value = e.target.value;
    const messageDiv = document.getElementById('message');
    
    if (value === '') {
        messageDiv.textContent = '';
        return;
    }
    
    const num = parseInt(value, 10);
    
    if (isNaN(num)) {
        messageDiv.textContent = 'Enter a valid number';
    } else if (num < 0) {
        messageDiv.textContent = 'Enter a positive value';
    } else if (num % 2 === 0) {
        messageDiv.textContent = `Next 3 even numbers: ${num + 2}, ${num + 4}, ${num + 6}`;
    } else {
        messageDiv.textContent = `Next 3 odd numbers: ${num + 2}, ${num + 4}, ${num + 6}`;
    }
});
