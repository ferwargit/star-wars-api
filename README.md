# star-wars-api

[Vitest](https://github.com/vitest-dev/vitest)

[Video](https://www.youtube.com/watch?v=2Lmz87uYBsw)

[Star war - API](https://swapi.dev/documentation#javascript)

[Plugins](https://vitejs.dev/plugins/#community-plugins)



Cuando usas ESM (ECMAScript Modules) para exportar un módulo, tienes dos opciones:

Usar export default para exportar un valor por defecto:

js
Copy code
// archivo.js
export default function() {
  // ...
}
Para importar este valor por defecto, utilizas import nombre from './archivo.js'.

Usar export para exportar uno o más valores concretos:

js
Copy code
// archivo.js
export function funcion1() {
  // ...
}

export const constante1 = 42;
Para importar estos valores concretos, utilizas import { funcion1, constante1 } from './archivo.js'.

Cuando usas CommonJS para exportar un módulo, utilizas module.exports:

js
Copy code
// archivo.js
module.exports = {
  funcion1: function() {
    // ...
  },

  constante1: 42
}
Para importar este objeto que contiene las funciones y constantes exportadas, utilizas const nombre = require('./archivo.js').

Ahora bien, en el caso concreto de Jest y Babel, ocurre lo siguiente:

Jest no soporta nativamente ESM, así que se recomienda utilizar CommonJS para los archivos de configuración de Jest.

Babel 7.9 en adelante soporta ESM, pero para que funcione correctamente con Jest, es necesario que los archivos de configuración de Babel sean también CommonJS. Esto se debe a que Jest utiliza los archivos de configuración de Babel de manera sincrónica y, por tanto, necesita que sean CommonJS.

Por eso, si estás utilizando type: module en tu package.json para activar ESM en tu proyecto, es importante que los archivos de configuración de Jest y Babel tengan extensión .cjs y utilicen module.exports. De esta forma, Jest podrá leer correctamente los archivos de configuración de Babel y todo debería funcionar correctamente.

Espero haber aclarado tus dudas. ¡Saludos!