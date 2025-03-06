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
    const copyBtn = document.getElementById('copy-btn');

    navigator.clipboard.writeText(numberOnly)
        .then(() => {
            copyBtn.textContent = 'Copied';
            copyBtn.classList.add('copied'); // Add copied style
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
                copyBtn.classList.remove('copied'); // Revert style
            }, 2000); // Revert after 2 seconds
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}

// Add enter key functionality
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculateHours();
    }
});
