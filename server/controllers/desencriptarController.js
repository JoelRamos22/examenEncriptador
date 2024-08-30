exports.desencriptarTexto = (req, res) => {
    const { texto } = req.body;
  
    if (!/^[a-z\s,?!]*$/.test(texto)) {
      return res.status(400).json({
        error: 'Solo se permiten letras minúsculas, espacios y los símbolos , ? !'
      });
    }
  
    let textoDescifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  
    res.json({
      mensaje: 'Texto desencriptado con éxito',
      textoDescifrado
    });
  };
  