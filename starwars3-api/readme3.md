# Configuracion

[Video](https://www.youtube.com/watch?v=2Lmz87uYBsw)

1.- npm create vite@latest starwars3-api
2.- cd starwars3-api
3.- npm install
4.- npm run dev

5.- Elimino la carpeta assets
6.- import './App.css' en el main.jsx
7.- Limpio el App.jsx

8.- En src creo la carpeta test y dentro el archivo App.test.js vacio
9.- [Setup sin Create React App](https://jestjs.io/es-ES/docs/tutorial-react)
10.- npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
11.- En el package.json en la seccon scripts: "test": "jest"

12.- En la raiz del proyecto creo babel.config.cjs
13.- Ejecuto npm test y falla.
Es correcto por que no tengo ningun test dentro del archivo
Your test suite must contain at least one test.
14.- Escribo el test (solo describe() e it()) y passed.
15.- Ahora habilito el render(<App />) y tengo que importar import App  from '../App';
16.- Y falla por que el render() no est definido / ReferenceError: render is not defined
17.- Para usar el render() necesito @testing-library/react
npm install --save-dev @testing-library/react
18.- Tengo que importarlo en el App.test.cjs
import { render, screen } from '@testing-library/react';
19.- Y falla porque App no esta definido / ReferenceError: App is not defined
El error que estás recibiendo se debe a que estás intentando renderizar tu componente React en un entorno que no es compatible con el navegador. Cuando usas la función render de Testing Library en tu prueba, está tratando de renderizar tu componente en un DOM virtual, pero la variable global document no está definida en ese entorno.

Para solucionar esto, puedes configurar Jest para que utilice el entorno de prueba jsdom, que proporciona un entorno de navegador simulado en Node.js. Para hacerlo, agrega lo siguiente a tu archivo jest.config.js:

jest.config.cjs

module.exports = {
  testEnvironment: "jsdom"
}

20.- Falla porque me falta el paquete
Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

21.- Instalo el paquete
npm install --save-dev jest-environment-jsdom

22.- Falla TypeError: expect(...).toBeInTheDocument is not a function
el error indica que la función toBeInTheDocument() no está definida. Esto se debe a que no se ha importado la librería @testing-library/jest-dom, que es donde se encuentra definida dicha función.

Para solucionarlo, debes asegurarte de tener instalada la librería @testing-library/jest-dom y luego importarla en el archivo de prueba. Puedes instalarla usando el siguiente comando:

npm install --save-dev @testing-library/jest-dom

Y luego, en el archivo App.test.js, debes agregar la siguiente línea de importación:

import '@testing-library/jest-dom';

23.- Paso el test
Ahora trabajamos con App.jsx

24.- En src creo un data.json con lo que nos devuelve la api en este caso la 1er pagina, para no meternos con las llamadas a la api
[Star war - API](https://swapi.dev/api/people)

25.- importamos el data.json
26.- mapeo el data con la key
27.- verifico que muestre todos los datos en pantalla
28.- Ahora tengo que hacer el test para que verifique los otros datos
para ello en App.test.js importo data
29.- Creo el test y pasa
30.- Ahora tengo que verificar que los datos vengan de una api, hasta ahora venian de un JSON
31.- Para ello en src me creo una carpeta api y dentro un archivo people.js
32.- Tengo que hacer 1ro los test de las llamadas a las api
33.- Por lo menos un test que mockee de cierta manera el metodo fetch para decirles nosotros que tiene que devolver. De esta manera evitamos hacer las llamadas a la api desde los test
34.- npm install jest-mock


Comentar componentes
* Eres un experto y especialista en React, Jest y Babel escribiendo código y comentando código de componentes y de pruebas unitarias para componentes en React. Me puedes explicar y comentar el siguiente código del siguente componente para poder comprender  sus comandos y entender su construccion y funcionamiento , por favor. Este es el codigo del componente: []

Comentar pruebas unitarias
* Eres un experto y especialista en React, Jest y Babel escribiendo código y comentando código de componentes y de pruebas unitarias para componentes en React. Me puedes explicar y comentar el siguiente código de la prueba unitaria para poder comprender sus comandos y entender su construccion y funcionamiento , por favor. Este es el codigo del componente: []
y este es el codigo de la prueba unitaria: []

Ayuda con el Error
* Eres un experto y especialista en React, Jest y Babel escribiendo código y comentando código de componentes y de pruebas unitarias para componentes en React. Me puedes explicar en detalle que esta pasando para comprender y entender, y asi desarrollar alguna solucion optima al error presentado, por favor. Este es el mensaje de error: []. Puedes ayudarme con el codigo? Que opciones tengo? Que puedo hacer?