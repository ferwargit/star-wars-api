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

[Setup sin Create React App](https://jestjs.io/es-ES/docs/tutorial-react)

[Usando Babel](https://jestjs.io/es-ES/docs/getting-started#using-babel)

************************************************************************
1.- npm create vite@latest starwars2-api
2.- React y JavaScipt + SWC
3.- cd starwars2-api
4.- npm i (Se crea la carpeta node_modules y package-lock.json)
5.- npm run dev (Verifico que todo funcione ok)

6.- Borro carpeta assets con el logo.svg
7.- Preparo el archivo App.jsx. (Verifico que se muestre la pagina)
8.- Creo carpeta tests en src y dentro el archivo App.test.js
8.- [Setup sin Create React App](https://jestjs.io/es-ES/docs/tutorial-react)
9.- npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
10.- Como el package.json tiene "type": "module" tengo que configurar con la extension .cjs. En la raiz del proyecto creo babel.config.cjs
11.- En el package.json en la seccion "scripts" configuro "test": "jest"
12.- Verifico con npm test. ok

**********************************************************************
13.- Para utilizar render() instalo @testing-library/react
npm install --save-dev @testing-library/react
14.- Claro, el error que estás recibiendo se debe a que estás intentando renderizar tu componente React en un entorno que no es compatible con el navegador. Cuando usas la función render de Testing Library en tu prueba, está tratando de renderizar tu componente en un DOM virtual, pero la variable global document no está definida en ese entorno.

Para solucionar esto, puedes configurar Jest para que utilice el entorno de prueba jsdom, que proporciona un entorno de navegador simulado en Node.js. Para hacerlo, agrega lo siguiente a tu archivo jest.config.js:

jest.config.cjs

module.exports = {
  testEnvironment: "jsdom"
}

15.- Instalo 
npm install --save-dev jest-environment-jsdom

16.- ejecuto npm test

TypeError: expect(...).toBeInTheDocument is not a function

el error indica que la función toBeInTheDocument() no está definida. Esto se debe a que no se ha importado la librería @testing-library/jest-dom, que es donde se encuentra definida dicha función.

Para solucionarlo, debes asegurarte de tener instalada la librería @testing-library/jest-dom y luego importarla en el archivo de prueba. Puedes instalarla usando el siguiente comando:


npm install --save-dev @testing-library/jest-dom

Y luego, en el archivo App.test.js, debes agregar la siguiente línea de importación:


import '@testing-library/jest-dom';

Con esto, la prueba debería ejecutarse sin problemas.

17.- Ejecuto npm test ok
Pasar al 20.- cambiar la importacion App.css al main.jsx y quitar de App.jsx



18.- Eso sin el css, cuando importo el css al App.jsx
SyntaxError: Private field '#root' must be declared in an enclosing class

El error parece estar relacionado con la configuración de Babel en tu proyecto. Jest está teniendo problemas para analizar el archivo App.css debido a un error de sintaxis. Parece que el archivo está utilizando una característica de campo privado que Jest no reconoce.

Una posible solución para esto es agregar una configuración adicional a tu archivo babel.config.cjs para habilitar la sintaxis de campo privado. Puedes intentar agregar la siguiente configuración:


plugins: [
  ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
]

Asegúrate de instalar el paquete @babel/plugin-proposal-private-property-in-object si aún no lo has hecho:


npm install --save-dev @babel/plugin-proposal-private-property-in-object

19.-Babel buscará el archivo de configuración en el siguiente orden de prioridad:

babel.config.js / babel.config.cjs (configuración global)
.babelrc.js / .babelrc.cjs / .babelrc.json / .babelrc (configuración local)
package.json (configuración en "babel" propiedad)

20.- Si en App.css tengo #root{} el App.css lo tengo que importar en el main.jsx no en el componente App.jsx. Ya que #root es una raiz y puede generar conflictos con otros componentes en caso de que lo tengan que utilizar.

**********************************************************************

Eres un experto en React y Jest con pruebas unitarias. Cual es la diferencia entre it() y test()? Por que usar uno u otro?  Me puedes dar detalles  con ejemplos y opciones para poder entender y comprender sus usos?  Se usan o pertenecen a diferentes framework de testing? Me puedes ayudar, por favor.

Tanto "it()" como "test()" son funciones de prueba en Jest, un framework de pruebas unitarias para JavaScript. La función "test()" es la forma más básica de escribir una prueba, mientras que "it()" es una forma más específica y detallada de escribir una prueba.

La función "test()" toma dos argumentos: un nombre para la prueba y una función que contiene la prueba en sí. Por ejemplo:

javascript
Copy code
test('esto es una prueba', () => {
  expect(1 + 2).toBe(3);
});
Aquí, hemos nombrado nuestra prueba "esto es una prueba" y hemos definido una función que realiza la prueba real. La función usa la función "expect()" para verificar que 1 + 2 sea igual a 3.

Por otro lado, la función "it()" también toma dos argumentos, pero en orden inverso: primero la descripción de la prueba y luego la función de prueba en sí. Por ejemplo:

javascript
Copy code
it('suma 1 + 2 para ser igual a 3', () => {
  expect(1 + 2).toBe(3);
});
Aquí, hemos escrito una prueba más descriptiva que usa "it()" en lugar de "test()". El nombre de la prueba es "suma 1 + 2 para ser igual a 3", lo que nos da más información sobre lo que está siendo probado.

En cuanto a cuándo usar "test()" y cuándo usar "it()", en realidad es una cuestión de preferencia personal. Algunos desarrolladores prefieren usar "test()" para todas sus pruebas, mientras que otros prefieren usar "it()" para pruebas más descriptivas y detalladas.

En resumen, ambas funciones son similares en términos de su función, pero "it()" ofrece una forma más detallada y descriptiva de escribir pruebas. Sin embargo, la elección de cuál usar depende de la preferencia personal del desarrollador.

*******************************************************************
Funcion render()

Te recuerdo que eres un experto en React y Jest con pruebas unitarias. Que funcion tiene Jest para renderizar un componente jsx cuando escribimos una  prueba unitaria? Me puedes explicar y dar detalles?
¡Por supuesto! Jest tiene una función llamada "render" que nos permite renderizar componentes JSX dentro de nuestras pruebas unitarias. La función "render" se utiliza para crear una representación virtual de un componente y luego podemos realizar pruebas sobre ella.

La sintaxis básica de la función "render" es la siguiente:

javascript
Copy code
import { render } from '@testing-library/react';

test('mi prueba', () => {
  const { getByText } = render(<MiComponente />);
  expect(getByText('Hola')).toBeInTheDocument();
});
Aquí, estamos importando la función "render" de "@testing-library/react" y luego la estamos usando para renderizar el componente "MiComponente" dentro de nuestra prueba. La función "getByText" se utiliza para buscar elementos en la representación virtual y, en este caso, estamos buscando el texto "Hola" dentro del componente.

A partir de ahí, podemos realizar pruebas utilizando los métodos de aserción de Jest. En el ejemplo anterior, estamos utilizando el método "toBeInTheDocument()" para verificar que el texto "Hola" esté presente en el componente.

La función "render" también acepta opciones adicionales, como proporcionar un contexto o establecer propiedades para el componente. Por ejemplo:

javascript
Copy code
import { render } from '@testing-library/react';

test('mi prueba', () => {
  const { getByText } = render(<MiComponente nombre="Juan" />, { nombre: 'Juan' });
  expect(getByText('Hola, Juan')).toBeInTheDocument();
});
Aquí, estamos pasando la propiedad "nombre" al componente "MiComponente" y también estableciéndolo como una opción en la función "render". Luego, estamos buscando el texto "Hola, Juan" dentro del componente.

En resumen, la función "render" de Jest nos permite renderizar componentes JSX dentro de nuestras pruebas unitarias y realizar pruebas sobre ellos. Es una herramienta poderosa que nos permite verificar que nuestros componentes se comporten correctamente en diferentes situaciones y casos de uso.





ferwar@hotmail.com
Entonces necesito instalar @testing-library/react
¡Sí! Para poder usar la función "render" de Jest en tus pruebas unitarias de React, debes instalar "@testing-library/react" como una dependencia de desarrollo en tu proyecto.

Para instalar "@testing-library/react", puedes usar npm o yarn en tu terminal. Aquí hay algunos ejemplos:

Con npm:

css
Copy code
npm install --save-dev @testing-library/react
Con yarn:

css
Copy code
yarn add --dev @testing-library/react
Una vez que hayas instalado "@testing-library/react", puedes importar la función "render" y otros métodos de la biblioteca en tus pruebas unitarias, como se muestra en los ejemplos anteriores.

Recuerda que "@testing-library/react" es una biblioteca popular para escribir pruebas unitarias en React, pero hay otras bibliotecas y herramientas disponibles que también puedes explorar y utilizar en tus proyectos.

*************************************************************************

The error below may be caused by using the wrong test environment, see
https://jestjs.io/docs/configuration#testenvironment-string.
    Consider using the "jsdom" test environment.

Claro, el error que estás recibiendo se debe a que estás intentando renderizar tu componente React en un entorno que no es compatible con el navegador. Cuando usas la función render de Testing Library en tu prueba, está tratando de renderizar tu componente en un DOM virtual, pero la variable global document no está definida en ese entorno.

Para solucionar esto, puedes configurar Jest para que utilice el entorno de prueba jsdom, que proporciona un entorno de navegador simulado en Node.js. Para hacerlo, agrega lo siguiente a tu archivo jest.config.js:

js
Copy code
module.exports = {
  testEnvironment: "jsdom"
}
Esto debería solucionar el problema que estás experimentando. Espero que esto te ayude. Si tienes más preguntas, no dudes en preguntar.