function calculateHours() {
    const total = parseFloat(document.getElementById('total').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(total) || isNaN(rate) || rate === 0) {
        resultDiv.textContent = 'Please enter valid numbers';
        return;
    }

    const hours = total / rate;
    resultDiv.textContent = `Hours worked: ${hours.toFixed(2)}`;
}

// Add enter key functionality
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculateHours();
    }
});
