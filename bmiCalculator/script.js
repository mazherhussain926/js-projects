let weight = document.getElementById("weight");
let height = document.getElementById("height");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
    let w = parseFloat(weight.value);  
    let h = parseFloat(height.value);  

    // Check if inputs are valid numbers
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
        document.getElementById("bmi").innerHTML = `Please enter valid numbers.`;
    } else {
        // BMI calculation
        let bmi = w / (h * h);
        document.getElementById("bmi").innerHTML = `${bmi.toFixed(2)} kg/m&sup2;`;
    }
});
