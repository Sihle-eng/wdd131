const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = ` ©${currentYear} ✌️ Sihlelelweyinkhosi Mchobokazi ✌️ | Eswatini`;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`

function calculateWindChill(tempCelsius, windSpeedKph) {
    const tempF = (tempCelsius * 9) / 5 + 32;
    const windSpeedMph = windSpeedKph / 1.609;
    
    if (tempF <= 50 && windSpeedMph > 3) {
        const windChillF = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * tempF * Math.pow(windSpeedMph, 0.16);
        const windChillC = ((windChillF - 32) * 5) / 9;
        return windChillC.toFixed(1) + "℃";
    } else {
        return "N/A";
    }
}
const temperature = 10;
const windSpeed = 20;

document.getElementById("windchill").textContent = "Windchill: " + calculateWindChill(temperature, windSpeed);
