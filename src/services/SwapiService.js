export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}` + url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase + url}, recived ${res.status}`)
    }
    return await res.json()
  }
  
  extractId(url) {    
    const regExp = /\/([0-9]*)\/$/;
    return url.match(regExp)[1];
  }
  
  transformPerson = (person) => {
    return {
      id: this.extractId(person.url),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear, 
    }
  }

  async getAllPeople() {
    const people = await this.getResource('/people/');
    return people.map(this.transformPerson)
  }

  async getPerson(id) {
    const person = this.getResource('/people/' + id);
    return this.transformPerson(person)
  }
  
  transformPlanet(planet) {    
    return {
      id: this.extractId(planet.url) ,
      planetName: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      period: planet.rotation_period
    }
  }

  async getAllPlanet() {
    const planets = await this.getResource('/planets/');
    return planets.map(this.transformPlanet)
  }

  async getPlanet(id) {
    const planet = await this.getResource('/planets/' + id)
    return this.transformPlanet(planet)
  }
  
  transformStarship = (starship) => {
    return {
      id: this.extractId(starship.url),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  async getAllStarships() {
    const starships = await this.getResource('/starships/');
    return starships.map(this.transformStarship);
  }

  async getStarship(id) {
    const starship =  this.getResource('/starships/' + id);
    return this.transformStarship(starship);
  }

}