function calculateHours() {
    const total = parseFloat(document.getElementById('total').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const resultText = document.getElementById('result-text');

    if (isNaN(total) || isNaN(rate) || rate === 0) {
        resultText.textContent = 'Please enter valid numbers';
        return;
    }

    const hours = total / rate;
    resultText.textContent = `${hours.toFixed(4)} hours`;
}

function copyResult() {
    const resultText = document.getElementById('result-text').textContent;
    navigator.clipboard.writeText(resultText)
        .then(() => {
            alert('Result copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy result.');
        });
}

// Add enter key functionality
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculateHours();
    }
});
