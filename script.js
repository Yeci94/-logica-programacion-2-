function convertirTemperatura() {
    let celsius;

    while (true) {
        celsius = prompt("Introduce la temperatura en grados Celsius:");


        if (celsius === "") {
            return;
        }

        
        celsius = parseFloat(celsius);

        
        if (celsius) {
            break; 
        } else {
            alert("Por favor, introduce un número válido.");
        }
    }

    
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;


    console.log(`Grados Kelvin: ${kelvin}`);
    console.log(`Grados Fahrenheit: ${fahrenheit}`);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Grados Kelvin: ${kelvin}</p>
        <p>Grados Fahrenheit: ${fahrenheit}</p>
    `;
}

convertirTemperatura();

