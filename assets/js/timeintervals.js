/*
    Usando a função de intervalos para setar as horas no
    momento exata que fizer a captura das horas, e disparar
    funções de rodas segundo por segundo, como se exibisse
    as horas em tempo real. E também uma função para fazer
    a parada da contagem.
*/
let timer;

function shomTime() {
    let d = new Date();

    let hrs = d.getHours();

    let min = d.getMinutes();

    let seg = d.getSeconds();

    let res = hrs + ':' + min + ':' + seg;

    document.querySelector('.time').innerHTML = res;
}

function comecar() {
    timer = setInterval(shomTime, 1000);
}

function parar() {
    clearInterval(timer);
}