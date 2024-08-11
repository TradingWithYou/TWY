// JavaScript for handling mobile view adjustments and interactive elements

document.addEventListener('DOMContentLoaded', () => {
    // Handle slider value change
    const durationSlider = document.getElementById('duration');
    const durationInfo = document.getElementById('duration-info');
    const investmentInput = document.getElementById('investment');
    const profitBreakdown = document.getElementById('profit-breakdown');

    durationSlider.addEventListener('input', () => {
        durationInfo.textContent = `${durationSlider.value} Months`;
    });

    investmentInput.addEventListener('input', calculateProfit);
    durationSlider.addEventListener('input', calculateProfit);

    function calculateProfit() {
        const investment = parseFloat(investmentInput.value) || 0;
        const duration = parseFloat(durationSlider.value) || 0;
        const profit = (investment * duration * 0.1).toFixed(2); // Example calculation
        profitBreakdown.textContent = `Estimated Profit: $${profit}`;
    }

    // Mobile view adjustments could be added here if needed
});
