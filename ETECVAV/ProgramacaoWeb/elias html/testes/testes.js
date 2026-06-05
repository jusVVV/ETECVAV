let answer = 'Picasso';

if (answer === 'Picasso') {
    console.log('Correct!')
}

answer = "Matisse";

if (answer !== 'Picasso') {
    console.log('Incorrect. the answer is not ' + answer)
}


let age = 75;

if (age >= 55) {
    console.log("discount applied.")
}

age = 35;

if (age < 55) {
    let need = 55 - age
    console.log("Discount denied. You need another " + need + " to get the discount.")
}

let condition = false;

if (condition) {
    console.log('1');
} else {
    console.log('2');
}

//document.getElementById().innerHTML
