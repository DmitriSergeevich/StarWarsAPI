import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import { Spiner } from '../Spiner/Spiner';

import './ItemList.css';

export default class ItemList extends Component {
  
  state = {
   people: null
  }
  
  swapi = new SwapiService()

  componentDidMount() {
    this.swapi.getAllPeople()
    .then((people) => this.setState({ people }))
  }
  
  createItemList = (people) => {
    return people.map(({id, name})=>{
      return (
        <li className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}>
          {name}
        </li>
      )
    })    
  }

  render() {
    const { people } = this.state;
    if(!people) {
      return <Spiner/>
    }
    const items = this.createItemList(people)
    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}