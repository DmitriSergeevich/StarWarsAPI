import React from 'react';
import { ErrorIndicator } from '../ErrorIndicator/ErrorIndicator';
import SwapiService from '../../services/SwapiService';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../ItemDetails/ItemDetails';
import { Row } from '../Row/Row';
import { ErrorBoundry } from '../ErrorBoundry/ErrorBoundry';

export default class PersonSection extends React.Component {
  state = {
    selectedPerson: 5,    
  }
  
  onItemSelected = (id) => {
    this.setState({selectedPerson: id})
  } 
  
  swappi = new SwapiService();

  itemList = <ItemList onItemSelected={this.onItemSelected}
    getData={this.swappi.getAllPeople}
    renderItem={({ name, gender, birthYear}) => `${name} (${gender} ${birthYear})`}
  />
  
  personDetails = <PersonDetails selectedPerson={this.state.selectedPerson} />

  render() {
    if(this.state.hasError) {
      return <ErrorIndicator/>
    }
    return (
      <ErrorBoundry>
          < Row leftItem={this.itemList} rightItem={this.personDetails}/>
      </ErrorBoundry>
    ) 
  }

}