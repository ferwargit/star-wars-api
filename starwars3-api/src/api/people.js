export async function getPeople(page) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    if (!response.ok) {
      throw new NetworkError();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getCharacter(id = 1) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    if (!response.ok) {
      throw new NetworkError();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function searchCharacter(name) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);
    if (!response.ok) {
      throw new NetworkError();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "Network error";
  }
}