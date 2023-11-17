# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# final:
https://medium.com/@adrianhuber17/how-to-build-a-simple-real-time-application-using-flask-react-and-socket-io-7ec2ce2da977


// server-side
io.on("connection", (socket) => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

// client-side
socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.on("disconnect", () => {
  console.log(socket.id); // undefined
});

# webtrc : funciones:
https://developer.mozilla.org/es/docs/Web/API/WebRTC_API
https://medium.com/stackanatomy/introduction-to-simple-peer-a-webrtc-library-ab04ea8aa5fe

Estaba usando vuejs con vite, simple-peer y pusher. El error que encontré era similar al que has mostrado, el mío se remonta a que 'Stream' no estaba definido.

* Peer.on
La clase Peer proporciona un método on para registrar detectores de eventos para varios eventos que pueden ocurrir durante una conexión WebRTC. Estos eventos incluyen recibir datos del par, conectarse con el par y desconectarse del par.  el método "on" para registrar un detector de eventos para el evento "connect", que se produce cuando se forma una conexión WebRTC
* Peer.signal
La clase 'Peer' proporciona una función de señal que se utiliza para transmitir datos de señalización al par. La señalización es el mecanismo mediante el cual dos pares crean una conexión WebRTC. Implica transferir información como direcciones de red y capacidades del dispositivo a través de un canal de señalización, lo que comúnmente se logra mediante un protocolo de señalización basado en servidor.
** 
El método de señal, junto con el método on, se puede utilizar para registrar detectores de eventos para varios eventos que pueden ocurrir durante el proceso de señalización.
* Peer.send:
La clase 'Peer' incluye una función de envío para enviar datos al par a través de la conexión WebRTC. El método 'enviar' solo acepta un argumento: los datos que se enviarán al par. Esta información puede tomar la forma de una cadena, un búfer de matriz o una matriz escrita

***
Estaba usando vuejs con vite, simple-peer y pusher. El error que encontré era similar al que has mostrado, el mío se remonta a que 'Stream' no estaba definido.
== > nodePolyfills()

Hola, tuve este problema con SvelteKit/Vite como mi entorno y lo resolví instalando el complemento @rollup/plugin-inject. De lo contrario, el paquete randombytes no encuentra criptografía.

==> 

Tareotas:
1. ventana emergente para ingresar el nombre de la persona a jugar  , este mismo debe habilitar el bbox de la imagen del reto
2. diseño de los puntos sea un grid de 5x5 
3. mover la imagen envio una señal
4. socket privado para este usuario que ingresa