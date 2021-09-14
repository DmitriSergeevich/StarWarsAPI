export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';
  _ImageUrlBase = 'https://starwars-visualguide.com/assets/img'
  async getResource(url) {
    const res = await fetch(`${this._apiBase}` + url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase + url}, recived ${res.status}`)
    }
    return await res.json()
  }
  
  extractId = (url) => {
    const regExp = /\/([0-9]*)\/$/;
    return url.match(regExp)[1];    
  }
  
  transformPerson = (person) => {
    return {      
      id: this.extractId(person.url),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }

  getAllPeople = async () => {
    const people = await this.getResource('/people/');
    return people.results.map(this.transformPerson)
  }

  getPerson= async (id) => {   
    const person = await this.getResource('/people/' + id);    
    return this.transformPerson(person)
  }
  
  transformPlanet = (planet) => { 
    return {
      id: this.extractId(planet.url),
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      period: planet.rotation_period
    }
  }

  getAllPlanet = async () => {
    const planets = await this.getResource('/planets/');    
    return planets.results.map(this.transformPlanet)
  }

  getPlanet = async (id) => {
    const planet = await this.getResource('/planets/' + id)
    return this.transformPlanet(planet)
  }
  
  transformStarship = (starship) => {    
    return {
      id: this.extractId(starship.url),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  getAllStarships = async () => {
    const starships = await this.getResource('/starships/');
    return starships.results.map(this.transformStarship);
  }

  getStarship = async (id) => {
    const starship = await this.getResource('/starships/' + id);
    return this.transformStarship(starship);
  }
  
  getPersonImage = ({ id }) => {
    return `${this._ImageUrlBase}/characters/${id}.jpg`
  }
  getStarshipImage = ({ id }) => {
    return `${this._ImageUrlBase}/starships/${id}.jpg`
  }
  getPlanetImage = ({ id }) => {
    return `${this._ImageUrlBase}/planets/${id}.jpg`
  }

  getSearchPeople = async (str) => {
    const dataPeople = await this.getResource(`/people/?search=${str}`);
    
    return {
      foundPeople: dataPeople.results.map(this.transformPerson),
      dataPeople
    }  
  };

  getFoundPeoplePage = async (pageLink) => {    
    const regExp = /(\/people\/\?search=)([a-zA-Z])(&page=)([0-9]*)/;
    const url = pageLink.match(regExp)[0];
    const dataPeople = await this.getResource(url);

    return {
      foundPeople: dataPeople.results.map(this.transformPerson),
      dataPeople
    }
  }
}

