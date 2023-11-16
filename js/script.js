function updateTime() {
    const timeElement = document.getElementById("time");
    let dateNow = new Date();
    let horas = dateNow.getHours();
    let minutos = dateNow.getMinutes();
    let segundos = dateNow.getSeconds();
    const timeString = `${horas}:${minutos}:${segundos}`;
    timeElement.textContent = timeString;
}

let intervaId = [];

function startClock(){
    intervaId.push(setInterval(updateTime, 1000));
    updateTime();
}

function stopClock(){
    for (let id of intervaId){
        clearInterval(id);
    }    
}

function resetClock(){
    document.getElementById("time").textContent = "00:00:00";
}