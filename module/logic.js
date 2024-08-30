export function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    // Verificar que solo contenga letras minúsculas y espacios
    if (/^[a-z\s]*$/.test(texto)) {
      let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
  
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/encriptado.jpg";
      } else {
        resetUI("Ningún mensaje fue encontrado", "Ingresa el texto que deseas encriptar o desencriptar");
      }
    } else {
      Swal.fire(
        {
          icon: "error",
          title: "Ooops!",
          texto: "solo se permiten minusculas con espacios, intentalo de nuevo." 
        }
      );
      resetUI("Ningún mensaje fue encontrado", "Ingresa el texto que deseas encriptar o desencriptar");
    }
  }
  
export function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    // Verificar que solo contenga letras minúsculas y espacios
    if (/^[a-z\s]*$/.test(texto)) {
      let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
  
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptado.jpg";
      } else {
        resetUI("Ningún mensaje fue encontrado", "Ingresa el texto que deseas encriptar o desencriptar");
      }
    } else {
      Swal.fire(
        {
          icon: "error",
          title: "Ooops!",
          texto: "solo se permiten minusculas con espacios, intentalo de nuevo." 
        }
      );
      resetUI("Ningún mensaje fue encontrado", "Ingresa el texto que deseas encriptar o desencriptar");
    }
  }
  
  // Función para resetear la UI a su estado inicial
function resetUI(titulo, mensaje) {
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    tituloMensaje.textContent = titulo;
    parrafo.textContent = mensaje;
    muñeco.src = "./img/muñeco.png";
  }
  