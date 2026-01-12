/*
 * arxiu principal que arrenca el servidor HTTP
 * @author  sergi.grau@fje.edu
 * @version 1.0
 * date 06.12.2015
 * format del document UTF-8
 *
 * CHANGELOG
 * 06.12.2015
 * - arxiu principal que arrenca el servidor HTTP
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */

/**
 * [ES] Punto de entrada del servidor Node (`M12_server.js`).
 *
 * Ejecuta `server.iniciar()` y deja escuchando el puerto configurado en el servidor (8888).
 */
var server = require("./M12_server");

server.iniciar();