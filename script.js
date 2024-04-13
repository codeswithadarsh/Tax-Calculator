document.addEventListener("DOMContentLoaded", function() {
    const taxForm = document.getElementById("taxForm");
    const modal = document.getElementById("modal");
    const resultDisplay = document.getElementById("result");
    const closeButton = document.getElementById("closeButton"); 

    taxForm.addEventListener("submit", function(event) {
        event.preventDefault();

    
        document.querySelectorAll(".error-icon").forEach(icon => icon.classList.remove("active"));

        const grossIncome = parseFloat(document.getElementById("grossIncome").value);
        const extraIncome = parseFloat(document.getElementById("extraIncome").value) || 0;
        const deductions = parseFloat(document.getElementById("deductions").value) || 0;
        const age = document.getElementById("age").value;

        if (!grossIncome) {
            document.getElementById("grossIncomeError").classList.add("active");
        }

        if (!age) {
            document.getElementById("ageError").classList.add("active");
        }

        if (!grossIncome || !age) {
            return;
        }

        let tax = 0;
        const taxableIncome = grossIncome + extraIncome - deductions;

        if (taxableIncome > 800000) {
            if (age === "<40") {
                tax = (taxableIncome - 800000) * 0.3;
            } else if (age === "≥ 40 < 60") {
                tax = (taxableIncome - 800000) * 0.4;
            } else if (age === "≥ 60") {
                tax = (taxableIncome - 800000) * 0.1;
            }
        }

        resultDisplay.textContent = `Calculation: ${tax.toFixed(2)}`;
        modal.style.display = "block";
    });

    closeButton.addEventListener("click", function() { 
        modal.style.display = "none";
    });
});

// -------------------------Tooltip --------------------

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Content Loaded");
    const errorIcon = document.querySelector('.error-icon');
    const errorextra = document.querySelector('.error-icon2');
    const errorded = document.querySelector('.error-icon3');
    const tooltip = document.querySelector('.tooltip');
    const tooltip2 = document.querySelector('.tooltip2');
    const tooltip3 = document.querySelector('.tooltip3');

    errorIcon.addEventListener('mouseenter', function() {
        tooltip.style.display = 'block';
    });

    errorIcon.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none';
    });

    errorextra.addEventListener('mouseenter', function() {
        tooltip2.style.display = 'block';
    });

    errorextra.addEventListener('mouseleave', function() {
        tooltip2.style.display = 'none';
    });

    errorded.addEventListener('mouseenter', function() {
        tooltip3.style.display = 'block';
    });

    errorded.addEventListener('mouseleave', function() {
        tooltip3.style.display = 'none';
    });

    console.log("Error icon and tooltip event listeners attached");

    const grossIncomeInput = document.getElementById('grossIncome');
    const extraIncomeInput = document.getElementById('extraIncome');
    const deductionsIncomeInput = document.getElementById('deductions');
    const errorMessage = document.querySelector('.error-message');

    grossIncomeInput.addEventListener('input', function() {
        console.log("Gross income input changed");
        const value = this.value.trim();
        const isValid = /^\d*$/.test(value);

        if (!isValid) {
            errorIcon.style.display = 'inline-block';
            errorMessage.style.display = 'none';
            grossIncomeInput.classList.add('invalid');
        } else {
            errorIcon.style.display = 'none';
            errorMessage.style.display = 'none';
            grossIncomeInput.classList.remove('invalid');
        }
    });

    extraIncomeInput.addEventListener('input', function() {
        console.log("Extra income input changed");
        const value = this.value.trim();
        const isValid = /^\d*$/.test(value);

        if (!isValid) {
            errorextra.style.display = 'inline-block';
            tooltip2.style.display = 'none';
            extraIncomeInput.classList.add('invalid');
        } else {
            errorextra.style.display = 'none';
            tooltip2.style.display = 'none';
            extraIncomeInput.classList.remove('invalid');
        }
    });

    deductionsIncomeInput.addEventListener('input', function() {
        console.log("Deductions input changed");
        const value = this.value.trim();
        const isValid = /^\d*$/.test(value);

        if (!isValid) {
            errorded.style.display = 'inline-block';
            tooltip3.style.display = 'none';
            deductionsIncomeInput.classList.add('invalid');
        } else {
            errorded.style.display = 'none';
            tooltip3.style.display = 'none';
            deductionsIncomeInput.classList.remove('invalid');
        }
    });
});
