// TEMPERATURE CONVERTER CODE!

function convertCtoF (cel) {
    var fahrenheit = Math.round((cel * 9/5) + 32);
    document.getElementById('CFoutput').innerHTML = fahrenheit + "°f";
};
function convertFtoC (fah) {
    var celcius = Math.round((fah - 32) * 5/9);
    document.getElementById('CFoutput').innerHTML = celcius + "°c";
};




    