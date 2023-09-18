const cont_calculadora = document.querySelector(".cont_calculadora");
const display = document.querySelector(".display");
const btn_num = document.querySelectorAll("#btn_num");
const btn_op = document.querySelectorAll("#btn_op");
const btn_igualdad = document.querySelector("#btn_igualdad");
var operacion = "";

cont_calculadora.addEventListener("click", function (e) {
    value = e.target.value;
    clase = e.target.id;
    console.log(clase);
    const c = clase == "btn_num" || clase == "btn_op" || clase == "btn_borrar" || clase == "btn_igualdad" ? botones() : "Error";
    console.log(c);
})

const clear = () => {display.innerHTML = ""; operacion = "";}
const calculo = () => {var c = eval(operacion); display.innerText = c;}
const botones = () => {
    if (value != "=") {
        display.innerText += value;
        operacion += `${value}`;
        // console.log(operacion);
        if(value == "CE"){
            clear();
        }
    } else {
        calculo();
    }
}

