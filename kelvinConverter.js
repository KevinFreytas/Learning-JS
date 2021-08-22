// This is the temperature to be converted. It'll stay the same. That's why I chose to use const.
const kelvin = 100;

// This is the convertion from Kelvin to Celsius. It works by subtracting 273 from Kelvin's temperature.
let celsius = kelvin - 273;

// Convert Celsius into Fahrenheit and round it down to the closest integer.
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

// Convert Celsius into Newton scale and round it down to the closest integer.
let newton = Math.floor(celsius * (33 / 100));

console.log(`${kelvin} degrees Kelvin is ${celsius} degrees Celsius, ${fahrenheit} degrees Fahrenheit and ${newton} degrees Newton`);
