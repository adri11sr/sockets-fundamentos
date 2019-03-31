var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
// Escuchar
socket.on('disconnect', function() {
    console.log('Predimos la conexion al servidor');
});
// Enviar Info
socket.emit('enviarMensaje', {
    user: 'Adrian',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});
// Escuchar info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});