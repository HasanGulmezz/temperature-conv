
const value = document.getElementById("text_box");
const result = document.getElementById("result");
const frst = document.getElementById("first_selection");
const scnd = document.getElementById("second_selection");
let temp;

function convert(){
    var t1 = frst.value;
    var t2 = scnd.value;
    if(t1 == "none" || t2 == "none"){
        result.textContent = "You have to select both units !!"
    }
    else if (t1 == "Celsius" && t2 == "Fahrenheith") {
        temp = Number(value.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + " F°";
    }
    else if (t1 == "Celsius" && t2 == "Kelvin") {
        temp = Number(value.value);
        temp = temp - 273;
        result.textContent = temp + " K";
    }
    else if (t1 == "Fahrenheith" && t2 == "Celsius") {
        temp = Number(value.value);
        temp = (temp-32) * 5 / 9;
        result.textContent = temp + " C°";
    }
    else if (t1 == "Fahrenheith" && t2 == "Kelvin") {
        temp = Number(value.value);
        temp = (temp-32) * 5 / 9;
        temp = temp - 273;
        result.textContent = temp + " K";
    }
    else if (t1 == "Kelvin" && t2 == "Celsius") {
        temp = Number(value.value);
        temp = temp + 273;
        result.textContent = temp + " C°";
    }
    else if (t1 == "Kelvin" && t2 == "Fahrenheith") {
        temp = Number(value.value);
        temp = temp + 273;
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + " F°";
    }
    else if (t1 == t2){
        result.textContent = "Select different units !!"
    }
}