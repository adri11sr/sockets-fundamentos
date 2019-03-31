const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        user: 'Admin',
        mensaje: 'Bienvenido al chat'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (msg.user) {
        //     callback({
        //         res: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         res: 'Todo salio mal'
        //     });
        // }

    });

});