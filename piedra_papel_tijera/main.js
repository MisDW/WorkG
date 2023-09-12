const btn = document.querySelectorAll(".btn");
const eleccion_user = document.getElementById("eleccion_user");
const eleccion_machine = document.getElementById("eleccion_machine");
    
const points_user = document.getElementById("points_user");
const points_machine = document.getElementById("points_machine");
const round = document.querySelector(".round");

const user_nothing = document.getElementById("user_nothing");
const machine_nothing = document.getElementById("machine_nothing");

const wins = document.getElementById("wins");
const lose = document.getElementById("lose");

const float_point_user = document.getElementById("float_point_user");
const float_point_machine = document.getElementById("float_point_machine");

    var count_points_user = 0;
    var count_points_machine = 0;
    var count_round = 0;
    var count_wins = 0;
    var count_lose = 0;

btn.forEach(b => {
    b.addEventListener("click", ()=>{
        userEleccion = b.id;
        // Creacion de objeto de logica
        const gameLogic = new game();
        const numberRandom = gameLogic.numberRandom();
        // envio de datos
        const answer = gameLogic.eleccionMachine(numberRandom); // envio de num random
        console.log("___ " + answer, numberRandom + " ___"); // muestreo convertido
        gameLogic.elecciones(userEleccion, answer);

        /* Eleccion por texto */
        // eleccion_user.innerHTML = userEleccion;
        // eleccion_machine.innerHTML = answer;
    })
});

// const btn_restart = document.getElementById("btn_restart");
// btn_restart.addEventListener("click", ()=>{
//         console.log("-- ReStart --");
//         gameLogic.restart();
    
// })

class game{

numberRandom(){
    const minValue = 1; // El valor mínimo que quieres excluir (cercano a 0)
    const maxValue = 4;    // El valor máximo que quieres incluir
    const numRandom = minValue + Math.random() * (maxValue - minValue);
    var num = parseInt(numRandom);
    return num;
}

eleccionMachine(num){
    let answer;

    if (num === 1) {
        answer = "piedra";
    }else if(num === 2){
        answer = "papel"
    }else if (num === 3) {
        answer = "tijeras";
    }
    return answer;
}
    
elecciones(user, machine) {
    const winUser = document.querySelector(".winUser");
    const winMachine = document.querySelector(".winMachine");
    const nathing = document.querySelector(".nathing");

    if (user == machine) {
        console.log("Nadie gano");
        this.showAlert(nathing);
        this.sumPoints(0);
        this.changeImg(user, machine);
    }else if (user == "piedra" && machine == "tijeras" || user == "papel" && machine == "piedra" || user == "tijeras" && machine == "papel") {
            console.log("Usuario gano");
            this.showAlert(winUser);
            this.sumPoints(1);
            this.changeImg(user, machine);
        }else if( machine == "piedra" && user == "tijeras" || machine == "papel" && user == "piedra" || machine == "tijeras" && user == "papel"){
                console.log("Maquina gano");
                this.showAlert(winMachine);
                this.sumPoints(2);
                this.changeImg(user, machine);
            }
        }

showAlert(nameClass){
    const alerts = document.querySelector(".alerts");
    const firstClass = nameClass.classList[0];
    nameClass.className = `${firstClass} msg_alert_on`;
    alerts.style.display = "block";
    setTimeout(() => {
        nameClass.className = `${firstClass} msg_alert_off`;
        alerts.style.display = "none";
        this.changeImg("nothing", "nothing");
    }, 1500);
}

sumPoints(n){
    if (n === 0) {
        this.floatPoints(float_point_user, 0);
        this.floatPoints(float_point_machine, 0);
        count_round++;
    }else if(n === 1){
        this.floatPoints(float_point_user, 1);
        this.floatPoints(float_point_machine, 0);
        count_points_user++;
        count_round++;
    }else if(n === 2){
        this.floatPoints(float_point_user, 0);
        this.floatPoints(float_point_machine, 1);
        count_points_machine++;
        count_round++;
    }

    round.innerHTML = `Round: ${count_round}`;
    points_user.innerHTML = `You Points: ${count_points_user}`;
    points_machine.innerHTML = `Bot Points: ${count_points_machine}`;
    this.winGame(count_points_user, count_points_machine);
}

winGame(user, machine){
const win_game_user = document.querySelector(".win_game_user");
const win_game_machine = document.querySelector(".win_game_machine"); 

    if (user == 3) {
        setTimeout(() => {
            this.showWinner(win_game_user);
            this.restart();
            count_wins++;
        }, 1500);
    }else if(machine == 3){
        setTimeout(() => {
            this.showWinner(win_game_machine)
            this.restart();
            count_lose++;
        }, 1500);
    }
}

showWinner(div){
    const alerts = document.querySelector(".alerts");
    const firstClass = div.classList[0];
    let condition = firstClass == "win_game_user" ? div.className = `${firstClass} msg_alert_on green` : div.className = `${firstClass} msg_alert_on red`
    alerts.style.display = "block";
    setTimeout(() => {
        div.className = `${firstClass} msg_alert_off`;
        alerts.style.display = "none";
        wins.innerHTML = `Wins: ${count_wins}`;
        lose.innerHTML = `Lose: ${count_lose}`;
    }, 5000);
}

changeImg(user, machine){
    user_nothing.src = `img/${user}.png`;
    machine_nothing.src = `img/${machine}.png`;
}

floatPoints(div,point){
    div.style.animation = "floatPoint 1s ease";
    div.innerHTML = `+${point}`;
    let condition = point == 1 ? div.style.color = "var(--green)" : div.style.color = "var(--red)";
    
    setTimeout(() => {
        div.style.animation = "nothing";
        div.innerHTML = `0`;
    }, 1000);
}

restart(){
    count_points_user = 0;
    count_points_machine = 0;
    count_round = 0;
    round.innerHTML = `Round: ${count_round}`;
    points_user.innerHTML = `You Points: ${count_points_user}`;
    points_machine.innerHTML = `Bot Points: ${count_points_machine}`;
    this.changeImg("nothing", "nothing");
}

}
