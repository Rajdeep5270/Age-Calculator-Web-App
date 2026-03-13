const dob = document.getElementById('birthDate');
const years = document.getElementById('years');
const months = document.getElementById('months');
const days = document.getElementById('days');

function calculateAge() {
    const birthDate = dob.value.split("-");

    const today = new Date();

    const currentDate = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();

    if (birthDate[0] > currentYear) {
        console.log("Invalid Year");
        return false;
    }

    let year = currentYear - Number(birthDate[0]);
    let month = currentMonth - Number(birthDate[1]);
    let day = currentDate - Number(birthDate[2]);

    if (day < 0) {
        month--;
        day += 30;
    }

    if (month < 0) {
        year--;
        month += 12;
    }

    // for debugging 

    // console.log("Year :", year);
    // console.log("Month :", currentMonth);
    // console.log("Days :", currentDate);

    // console.log(`You are ${year} years ${month} months ${days} days old.`);

    displayAge(year, month, day)
}

function displayAge(year, month, day) {
    years.innerText = year;
    months.innerText = month;
    days.innerText = day;
}