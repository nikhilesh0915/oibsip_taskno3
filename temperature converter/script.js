function convertToCelsius() {
    let fahrenheit = parseFloat(document.getElementById("temperature").value);
    if (!isNaN(fahrenheit)) {
        let celsius = (fahrenheit - 32) * 5 / 9;
        displayResult(celsius.toFixed(2) + " °C");
    }
}

function convertToFahrenheit() {
    let celsius = parseFloat(document.getElementById("temperature").value);
    if (!isNaN(celsius)) {
        let fahrenheit = celsius * 9 / 5 + 32;
        displayResult(fahrenheit.toFixed(2) + " °F");
    }
}

function displayResult(result) {
    document.getElementById("result").textContent = "Result: " + result;
}