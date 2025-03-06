function calculateHours() {
    const total = parseFloat(document.getElementById('total').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const resultText = document.getElementById('result-text');
    const copyBtn = document.getElementById('copy-btn');

    if (isNaN(total) || isNaN(rate) || rate === 0) {
        resultText.textContent = 'Please enter valid numbers';
        copyBtn.style.display = 'none'; // Hide button on invalid input
        return;
    }

    const hours = total / rate;
    resultText.textContent = `${hours.toFixed(4)} hours`; // Display with "hours"
    copyBtn.style.display = 'inline-block'; // Show button after valid result
}

function copyResult() {
    const resultText = document.getElementById('result-text').textContent;
    const numberOnly = resultText.replace(' hours', ''); // Remove "hours" for copying
    navigator.clipboard.writeText(numberOnly)
        .then(() => {
            alert('Number copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy number.');
        });
}

// Add enter key functionality
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculateHours();
    }
});
