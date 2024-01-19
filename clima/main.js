

const form = document.querySelector(".box_content");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const contry = document.getElementById('contry').value;
    const city = document.getElementById('city').value;
    // console.log(contry);
    search(contry, city)
})

function search(contry, city) {
    var key = "5e25b8d45697c6a1ac0b58929193be36"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${contry}&appid=${key}`)
    .then(data => data.json())
    .then(dataJson =>  {
        if (dataJson.cod == "404" || city == "" || dataJson.message === "city not found") {
            showError("Por favor escribe una ciudad");
        }else{
            showMessage(dataJson, contry, city);
        }
    });
}

function showError(msg) {
    const box_pagina = document.querySelector('.box_pagina');
    const alert = document.createElement('div');
    alert.classList = "msg_error"
    box_pagina.appendChild(alert);
    alert.innerHTML = `
    <div>
    <span>${msg}</span>
    <img src="img/clime/tormentaLluviosa.png">
    </div>
    `
     setTimeout(() => {
         alert.remove()
     }, 3000);
}

function showMessage(data, contry, city) {
    var {clouds:{all},name,main:{humidity,temp,temp_max,temp_min},weather:[{description,icon,main}],wind:{speed}} = data;
    const celcius_nor = parseInt(temp - 273.15);
    const celcius_max = parseInt(temp_max - 273.15);
    const celcius_min = parseInt(temp_min - 273.15);
    const img_icon = `https://openweathermap.org/img/wn/${icon}@4x.png`

    //traductor de descripcion
    switch (description) {
        case "overcast clouds":description = "Nublado☁"
        break;
        case "clear sky":description = "Despejado☀"
        break;       
        case "mist": description = "Neblina🌫"
        break;
        case "light rain": description = "Lluvia ligera🌦"
        break;
        default:
            console.log("Error");
            break;
    }

    switch (main) {
        case "Clouds": main = "Nubes"
            break;
        case "Clear": main = "Limpio"
            break;
        case "Mist": main = "Neblina"
            break;
        case "Rain": main = "Lluvia"
            break;
        default:
            console.log("Error");
            break;
    }

    const box_info_weather = document.querySelector(".box_info_weather");
    box_info_weather.innerHTML = " "
    
    box_info_weather.innerHTML = `
        <h2 class="name_city">${contry}, ${city}</h2>
        <p class="description">
            <span class="description_text">Descripcion: ${description}</span>
            <span class="humedad_viento_text">Humedad: ${humidity}%, Viento: ${speed}</span>
            <span class="cielo">Cielo: ${main}, Nubes: ${all}%</span>
        </p>
    <img src="${img_icon}" alt="clime" class="img_clima">
    <div class="grados">
            <span class="grados_nor">${celcius_nor}°C </span>
        <div class="grados_min_max">
            <span class="grados_max">${celcius_max}°C max</span>
            <span class="grados_min">${celcius_min}°C min</span>
        </div>
    </div>
    `
}
