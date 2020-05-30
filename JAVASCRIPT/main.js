function calculateInsurance() {

    //getting all the values

    var name = document.getElementById('name').value;
    var age = Number(document.getElementById('age').value);
    var country = document.getElementById('countrySel').value;
    var horsepower = Number(document.getElementById('horsepower').value);

    //calculating quote

    var rate = 0;

    if (country === 'austria') {
        rate = horsepower * 100 / age + 50;
    } else if (country === 'hungary') {
        rate = horsepower * 120 / age + 100;
    } else {
        rate = horsepower * 150 / (age + 3) + 50;
    }

    console.log(rate);
    rate = rate.toFixed(1);

    var resultField = document.getElementById('result');
    resultField.innerHTML = `${name}, your insurance costs ${rate} €`;
    resultField.style.display = 'flex';

    if (window.matchMedia('(max-width: 768px)').matches) {
        document.getElementById('calcWindow').style.height = '55em';
        document.getElementById('opaqueWindow').style.height = '55em';
        document.getElementById('main').style.height = '70em';
    }
}

var submit = document.getElementById('calculate');
submit.addEventListener('click', calculateInsurance);
