const btn_menu = document.querySelector(".menu__nav");
const tipo = document.querySelector(".tipo");
const reloj = document.querySelector(".reloj");
var n = 0;
btn_menu.addEventListener("click", function(i){
    if (i){
        n++; 
        console.log(n);
    }
    if (n == 1) {
        tipo.style.transform = "scaleY(1)";
        reloj.style.left = "-50px"
    }else{
        tipo.style.transform = "scaleY(0)";
        reloj.style.left = "0px"
        n = 0;
    }
})


const hora = document.querySelector(".hora");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");


setInterval(() => {
    const date = new Date();
    const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
    const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    
    hora.innerHTML = `${hour}:`;
    minutos.innerHTML = `${minutes}:`;
    segundos.innerHTML = `${2+seconds}`;
    
    if (minutes.toString <= 9) {
        tiempoMinutos.innerHTML =  `0${minutes}`;
    }
    if (seconds.toString <= 9) {
        tiempoSeg.innerHTML = `0${seconds}`
    }
}, 1000);


