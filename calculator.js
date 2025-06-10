document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('calculateButton');
  if (!button) {
    console.error('Button not found!');
    return;
  }
  button.addEventListener('click', calculateIncome);

  function calculateIncome() {
    const nightlyRate = parseFloat(document.getElementById('nightlyRate')?.value) || 0;
    const occupancyRate = parseFloat(document.getElementById('occupancyRate')?.value) / 100 || 0;
    const seasonLength = parseFloat(document.getElementById('seasonLength')?.value) || 0;
    const expenses = parseFloat(document.getElementById('expenses')?.value) || 0;

    if (!nightlyRate || !occupancyRate || !seasonLength) {
      document.getElementById('result').innerHTML = `<p>Please enter valid numbers for all fields.</p>`;
      return;
    }

    const rentalDays = seasonLength * 7;
    const bookedDays = rentalDays * occupancyRate;
    const grossIncome = bookedDays * nightlyRate;
    const netIncome = grossIncome - expenses;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <h3>Estimated Rental Income</h3>
      <p><strong>Gross Income:</strong> $${grossIncome.toFixed(2)}</p>
      <p><strong>Net Income (after expenses):</strong> $${netIncome.toFixed(2)}</p>
      <p>Based on ${bookedDays.toFixed(1)} booked days over ${seasonLength} weeks.</p>
    `;
  }
});