// Función para encriptar el texto
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, '3')
        .replace(/i/g, '1')
        .replace(/a/g, '4')
        .replace(/o/g, '0')
        .replace(/u/g, 'µ');
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/3/g, 'e')
        .replace(/1/g, 'i')
        .replace(/4/g, 'a')
        .replace(/0/g, 'o')
        .replace(/µ/g, 'u');
    return textoDesencriptado;
}

// Función para actualizar el texto encriptado en la página
function actualizarTextoEncriptado() {
    const input = document.getElementById('inputTexto');
    const output = document.getElementById('outputTexto');
    output.value = encriptarTexto(input.value);
}

// Función para actualizar el texto desencriptado en la página
function actualizarTextoDesencriptado() {
    const input = document.getElementById('inputTexto');
    const output = document.getElementById('outputTexto');
    output.value = desencriptarTexto(input.value);
}

// Función para copiar el texto encriptado al portapapeles
function copiarTexto() {
    const output = document.getElementById('outputTexto');
    output.select(); // Selecciona el contenido del textarea
    document.execCommand('copy'); // Copia el contenido al portapapeles
    alert('Texto copiado al portapapeles'); // Mensaje de confirmación
}

// Event Listeners para los botones
document.getElementById('btnEncriptar').addEventListener('click', actualizarTextoEncriptado);
document.getElementById('btnDesencriptar').addEventListener('click', actualizarTextoDesencriptado);
document.getElementById('btnCopiar').addEventListener('click', copiarTexto);
