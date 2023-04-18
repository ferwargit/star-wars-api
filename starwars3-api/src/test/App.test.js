// import React from 'react';
// En la primera línea, se importan las funciones "render" y "screen" de la librería "@testing-library/react" y se importa el método "act" de "react-dom/test-utils"
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App  from '../App';
import data from '../data.json' 
import { act } from 'react-dom/test-utils'
// import { mockRejectedValueOnce } from 'jest-mock'
// import { jest } from '@jest/globals'

// Luego, se define una función llamada "mockFetch" que se utiliza para simular una llamada a la API. Esta función utiliza la función "jest.fn()" para crear un "mock" de la función "fetch()" y simular su comportamiento. La función "mockResolvedValue()" se utiliza para devolver una respuesta simulada de la API que contiene los datos importados del archivo "data.json".
const mockFetch = jest.fn().mockResolvedValue({
  ok: true,
  json: async () => data
});


describe('Star wars APP', () => {
  // Después, se define una suite de pruebas llamada "Star Wars APP" con la función "describe()". Esta suite tiene dos "hooks" que se ejecutan antes y después de todas las pruebas: "beforeAll()" y "afterAll()". El primero establece el "mock" de la función "fetch()" en el objeto global "global.fetch" y el segundo lo limpia.

  beforeAll(() => {
    global.fetch = mockFetch;
  });

  afterAll(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });

  // Para esta funcion utilizamos el metodo de jest.spyOn para
  // poder espiar en el objeto windows la funcion fetch y poder modificar su comportamiento
  // beforeAll(() => jest.spyOn(window, "fetch"));
  // beforeAll(() => jest.replaceProperty(window, 'fetch', jest.fn()));

  // it('Should show a list of characters including Luke Skywalker', () => {
  //   render(<App />);
  //   expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
  // })

  // it('Should show a list of characters from a JSON file', () => {
  //   render(<App />);
  //   expect(screen.getByText(data.results[1].name)).toBeInTheDocument();
  // })

  // it('Should show a list of characters from a JSON file', () => {
  //   render(<App />);
  //   for (let character of data.results) {
  //     expect(screen. getByText(character.name)).toBeInTheDocument();
  //   }
  // })

  // it('Should show a character of items from the API', async () => {
  //   window.fetch.mockResolvedValueOnce({
  //     ok: true,
  //     json: async () => data
  //   });

  //   render(<App />);
  //   expect(window.fetch).toHaveBeenCalledTimes(1);
  //   expect(window.fetch).toHaveBeenCalledWith("https://swapi.dev/api/people/");

  //   for (let character of data.results) {
  //     expect(await screen.getByText(character.name)).toBeInTheDocument();
  //   }

  // })


  // Luego, se define una prueba utilizando la función "it()" que verifica que el componente "App" renderiza una lista de personajes obtenidos de la API.
  it('Should show a character of items from the API', async () => {
    //  Para ello, se utiliza el método "act()" para asegurarse de que la promesa devuelta por la función "getPeople()" se resuelve antes de continuar con la prueba. Se llama a "render()" para renderizar el componente "App" con la función "fetch" simulada, 
    await act(async () => {
      render(<App fetch={mockFetch} />);
    });
    // se verifica que la función "fetch" se ha llamado una vez y que se ha llamado con la URL correcta. 
    expect(mockFetch).toHaveBeenCalledTimes(2);
    expect(mockFetch).toHaveBeenCalledWith("https://swapi.dev/api/people/1");
    // expect(mockFetch).toHaveBeenCalledWith("https://swapi.dev/api/people/?page=1");
    // Finalmente, se recorre el arreglo de personajes importados de "data.json" y se verifica que cada uno de ellos se encuentra en el DOM del componente "App".
    for (let character of data.results) {
      expect(await screen.getByText(character.name)).toBeInTheDocument();
    }
  });

  it('should show an error message when has a network error', async () => {
    mockFetch.mockRejectedValueOnce(new Error("Network error"));

    await act(async () => {
      render(<App fetch={mockFetch} />);
    });

    expect(await screen.findByText("Network error")).toBeInTheDocument();

  });


});