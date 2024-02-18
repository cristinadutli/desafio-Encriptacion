
const botonEncriptar = document.querySelector('.btn-encriptar');
const botonDesencriptar = document.querySelector('.btn-desencriptar');
const textoInput = document.getElementById('texto');
const mensajeEncriptadoParrafo = document.getElementById('parrafo'); // Corregido el ID
const contenedorPrincipal = document.getElementById('contenedor-desencriptado');

const encriptacion = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const desencriptacion = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

function encriptarTexto(texto) {
    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i].toLowerCase();
        if (encriptacion[letra] && letra.match(/^[a-z]$/)) {
            textoEncriptado += encriptacion[letra];
        } else {
            textoEncriptado += letra;
        }
    }
    return textoEncriptado;
}

function desencriptarTexto(textoEncriptado) {
    let textoDesencriptado = textoEncriptado;

    // Desencriptar el texto
    for (let palabraEncriptada in desencriptacion) {
        const expresionRegular = new RegExp(palabraEncriptada, 'g');
        textoDesencriptado = textoDesencriptado.replace(expresionRegular, desencriptacion[palabraEncriptada]);
    }

    return textoDesencriptado;
}
function manejarEncriptar() {
    const texto = textoInput.value;
    const textoEncriptado = encriptarTexto(texto);

    mensajeEncriptadoParrafo.innerText = textoEncriptado;
    document.getElementById('titulo-mensaje').innerText = 'Mensaje encriptado'; // Corregido el ID
    contenedorPrincipal.style.backgroundColor = '#87CEEB';
    botonCopiar.style.display = 'block'; // Mostrar el botón de copiar
}

function manejarDesencriptar() {
    const textoEncriptado = textoInput.value;
    const textoDesencriptado = desencriptarTexto(textoEncriptado);

    mensajeEncriptadoParrafo.innerText = textoDesencriptado;
    document.getElementById('titulo-mensaje').innerText = 'Mensaje desencriptado';
    imagenMunieco.style.display = 'block';
   
    botonCopiar.style.display = 'none'; // Ocultar el botón de copiar
}

function copiarTextoEncriptado() {
    const textoEncriptado = mensajeEncriptadoParrafo.textContent.trim();
    navigator.clipboard.writeText(textoEncriptado)
        .then(() => {
            alert('Texto encriptado copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto encriptado:', err);
        });
}

botonEncriptar.addEventListener('click', manejarEncriptar);
botonDesencriptar.addEventListener('click', manejarDesencriptar);
botonCopiar.addEventListener('click', copiarTextoEncriptado);