function calculateHours() {
    const total = parseFloat(document.getElementById('total').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(total) || isNaN(rate) || rate === 0) {
        resultDiv.textContent = 'Please enter valid numbers';
        return;
    }

    const hours = total / rate;
    resultDiv.textContent = `${hours.toFixed(4)} hours`; // Changed from .toFixed(2) to .toFixed(4)
}

// Add enter key functionality
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculateHours();
    }
});
