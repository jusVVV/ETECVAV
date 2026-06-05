
function image() {
    let vel = document.querySelector("#number").value
    let valor = document.querySelector("#image")
    let tipo = document.querySelector("#tipo").value

    if (tipo === 'km') {
        valor.innerHTML = vel + ' Km é correspondente a ' + vel / 1.609 + " Milhas"
    }
    else {
        valor.innerHTML = vel + ' Milhas é correspondente a ' + vel * 1.609 + " Km"
    }
}
