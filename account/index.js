const btn_sig = document.querySelector(".btn_sig");
const btn_create = document.querySelector(".btn_create");

const msg = document.querySelector(".msg");
const titulo = document.getElementById("titulo");
const logo_user = document.getElementById("logo_user");
const correo = document.getElementById("correo");
const contra = document.getElementById("contra");
const olvidado = document.querySelector(".olvidado");
const input = document.querySelector(".input")
const box_check = document.querySelector(".box_check")

//constante de todo el cuerpo de pagina
const box_cont = document.querySelector(".box_cont");

var SigClicks = 0;

btn_sig.addEventListener("click", function (e) {
if (e) {SigClicks++;}
    switch (SigClicks) {
        case 1:
            Form2()
            break;
        case 2:
            onload()
            SigClicks = 0
            break;    
        default:
            break;
    }

    })

    function Form2() {
        var user = correo.value;
        console.log(user);
    logo_user.innerHTML = `
    <div class="cor_con_logo">
    <img src="img/iconlogin.png">
    <span>${user}</span>
    </div>
    `;

    correo.style.display = "none"
    contra.style.display = "block"
    box_check.style.display = `block`

    msg.innerHTML = ""
    olvidado.innerHTML = ""
    }

    function onload() {
        box_cont.innerHTML = `<img src="img/onload.gif" width="300px">`
        
    var con = contra.value;
    console.log(con);
    }

    //boton que muestra y esconde una contraseñas
    var n = 0;
    const ver = document.getElementById("ver");
    ver.addEventListener('click', function (e) {
        
        if (e) {n++;} 
        switch (n) {
            case 1:
                contra.type = "text";
                console.log("texto");
                break;
            case 2:
                contra.type = "password";
                console.log("contra");
                n = 0;
                break;        
            default:
                console.log("error");
                break;
        }      
    });