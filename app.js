let submitBtn = document.getElementById('submit');

leapYear = (year) => {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                results.innerText = `${year} is a leap year`;
            } else {
                results.innerText = `${year} is not a leap year`;
            }
        } else {
            results.innerText = `${year} is not a leap year`;
        }
    } else {
        results.innerText = `${year} is not a leap year`;
    }
};

window.addEventListener('load', () => {
    submitBtn.addEventListener('click', () => {
        let year = document.getElementById('year').value;

        leapYear(year);
    });
});