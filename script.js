
const ConvertTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('dropdown');
    const valueTemp = dropdown.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (Cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
    }
}