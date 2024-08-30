exports.encriptarTexto = (req, res) => {
    const { texto } = req.body;
  
    if (!/^[a-z\s,?!]*$/.test(texto)) {
      return res.status(400).json({
        error: 'Solo se permiten letras minúsculas, espacios y los símbolos , ? !'
      });
    }
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    res.json({
      mensaje: 'Texto encriptado con éxito',
      textoCifrado
    });
  };
  