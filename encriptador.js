function encriptar(){
    mostrar()
    let elemento = document.getElementById('texto')
    let elemento2 = document.getElementById('hist')
    let texto = elemento.innerText
    let salida = '';
    for (let x = 0; x < texto.length; x++) {
        if (texto.charAt(x)=='a') {
            salida += 'ai'
        }else if (texto.charAt(x)=='e') {
            salida += 'enter'
        }else if (texto.charAt(x)=='i') {
            salida += 'imes'
        }else if (texto.charAt(x)=='o') {
            salida += 'ober'
        }else if (texto.charAt(x)=='u') {
            salida += 'ufat'
        }else {
            salida += texto.charAt(x)
        }
    }
    elemento2.innerText = salida
}

function desencriptar(){
    let elemento = document.getElementById('texto')
    let texto = elemento.innerText
    console.log(texto)
    let salida = document.getElementById('hist')
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    console.log(texto)
    salida.innerText = texto
}

function copiar () {
    let copiado = document.getElementById('hist').innerText
    navigator.clipboard.writeText(copiado)
}

function mostrar(){
    let inp = document.getElementById('texto')
    if(inp.innerText != ''){
        document.querySelector('.texto__salidaImg').style.display = 'none'
        document.querySelector('.texto__salidaMensaje').style.display = 'none'
        document.getElementById('hist').style.display = 'block'
        document.querySelector('.contSalida').style.backgroundImage = 'url(././img/fondo.png)';
        document.querySelector('.contSalida').style.border = "solid 1px #C0A8EF";
        let el = document.querySelector('.boton__copiar')
        el.style.display = 'block'
    }else{
        console.log('vacio')
        let salida = document.getElementById('hist').innerText = 'No a ingresado mensaje'
    }


}