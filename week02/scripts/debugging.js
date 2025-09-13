// let radiusOutput = document.getElementById('radiusOutput');
// let areaOutput = document.querySelector('areaOutput');
let radiusOutput = document.getElementById('radiusOutput');
let areaOutput = document.getElementById('areaOutput');

let area = 0;
const PI = 3.14159;
let radius = 10;
area = PI * radius * radius;



radiusOutput.textContent = radius;
areaOutput.textContent = area;

radius = 20;
area = PI * radius * radius;
radiusOutput = radius;
areaOutput = area;