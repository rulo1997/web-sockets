
//Referencias del HTML
const lblOnline     = document.querySelector('#lblOnline');
const lblOffline    = document.querySelector('#lblOffline');

const tetxMensaje   = document.querySelector('#tetxMensaje');
const enviarMensaje = document.querySelector('#enviarMensaje');

const socket = io();

socket.on('connect', () => {

    console.log('Conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

});

socket.on('disconnect', () => {

    console.log('Desconectado del servidor');

    lblOffline.style.display = '';
    lblOnline.style.display = 'none';

});

socket.on('enviar-mensaje', ( payload ) => {

    console.log(payload);

})

enviarMensaje.addEventListener('click',() => {    

    const mensaje = tetxMensaje.value;

    const payload = {
        mensaje
        ,id: 'sad'
        ,fecha: new Date().getTime()
    }

    socket.emit('enviar-mensaje', payload , ( id ) => {

        console.log('Desde el server', id);

    });

});