// importa los hooks "useState" y "useEffect" desde la librería "react"
import { useState, useEffect, useRef } from 'react';
// import data from './data.json';
// importa una función llamada "getPeople" desde un archivo "./api/people".
import { getCharacter, getPeople, searchCharacter } from './api/people';


function App() {
  // El componente "App" tiene un estado inicial "people" que es un arreglo vacío y una función "setPeople" que actualiza ese arreglo. Esto se logra utilizando el hook "useState".
  const inputSearch = useRef(null);
  const [textSearch, setTextSearch] = useState("");

  const [people, setPeople] = useState([]);
  const [currentCharacter, setCurretCharacter] = useState(1);
  const [details, setDetails] = useState({});

  const [page, setPage] = useState(1);

  const [errorState, setErrorState] = useState({hasError: false});
  

  // Luego, el componente utiliza el hook "useEffect" para hacer una llamada a la función "getPeople" una vez que el componente se haya montado. Esto se logra pasando un arreglo vacío como segundo argumento del hook. Dentro de la función "useEffect", se utiliza el método "then" para actualizar el estado de "people" con los resultados de la llamada a "getPeople".
  useEffect(() => {
    getPeople(page)
      .then(setPeople)
      .catch(handleError);
  }, [page]);

  useEffect(() => {
    getCharacter(currentCharacter)
      .then(setDetails)
      .catch(handleError);
  }, [currentCharacter]);

  // La función "handleError" recibe un error como argumento y lo imprime en la consola.
  const handleError = (error) => {
    setErrorState({hasError: true, message: error.message});
  }

  const showDetails = (character) => {
    const id = Number(character.url.split('/').slice(-2)[0]);
    setCurretCharacter(id);
  }

  const onChangeTextSearch = (event) => {
    event.preventDefault();
    const text = inputSearch.current.value;
    setTextSearch(text);
  }

  const onSearchSubmit = (event) => {
    if(event.key !== 'Enter') return
    // Limpiamos el formulario
    inputSearch.current.value = '';
    // Limpiamos el estado
    setDetails({});
    // Hacemos la llamada a la API
    searchCharacter(textSearch)
      .then(setPeople)
      .catch(handleError);
    };

  const onChangePage = (next) => {
    if (!people.previous && page + next <= 0) return;
    if (!people.next && page + next >= 9) return;

    setPage(page + next);
  }

  // Finalmente, el componente devuelve una lista no ordenada (ul) que utiliza el método "map" para recorrer el arreglo "people" y renderizar cada uno de sus elementos como un elemento de lista (li). El atributo "key" de cada elemento es el nombre del personaje y su contenido es el mismo nombre.
  return (
    <>
      <h1>Star Wars Characters</h1>
      <input 
        ref={inputSearch} 
        onChange={onChangeTextSearch} 
        onKeyDown={onSearchSubmit}
        type="text"
        placeholder='Busca un personaje...'/>
      <p>Click on a character to see details</p>
      <ul>
        {errorState.hasError && <div>{errorState.message}</div>}
        {people?.results?.map((character) => (
          <li key={character.name} onClick={()=> showDetails(character)}>{character.name}</li>
        ))}
      </ul>

      <section>
        <button onClick={() => onChangePage(-1)}>Prev</button>
        | {page} |
        <button onClick={() => onChangePage(+1)}>Next</button>
      </section>

      { details && (
      <aside>
        <h2>{details.name}</h2>
        <ul>
          <li>Height: {details.height}</li>
          <li>Mass: {details.mass}</li>
          <li>Year of Birth: {details.birth_year}</li>
        </ul>
      </aside>
      )}   
    </>
  );
}

export default App;
