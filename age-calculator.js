document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();

    let ageYears = today.getFullYear() - birthdate.getFullYear();
    let ageMonths = today.getMonth() - birthdate.getMonth();
    let ageDays = today.getDate() - birthdate.getDate();

    if (ageDays < 0) {
        ageMonths -= 1;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Last day of the current month
    }

    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }

    document.getElementById('result').innerHTML = `
        <h2>Your Age:</h2>
        <p>${ageYears} Years, ${ageMonths} Months, ${ageDays} Days</p>
    `;
});
