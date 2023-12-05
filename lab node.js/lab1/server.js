var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
    }).listen(8081);
    // Affichage d’un message sur la console pour indiquer le lancement du serveur
    console.log('Server running at http://127.0.0.1:8081/');