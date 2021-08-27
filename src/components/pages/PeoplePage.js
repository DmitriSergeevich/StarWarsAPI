import React from 'react';
import PersonDetails from '../Details/PersonDetails';
import { PersonList } from '../ListOfItems/ListOfItems';
import { Row } from '../Row/Row';

export default class PeoplePage extends React.Component {
  
  state = {
    selectedItem: null
  }
  
  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  }

  render() {
    const { selectedItem } = this.state;
    return (
      <Row 
        leftItem={<PersonList onItemSelected={this.onItemSelected}/>}
        rightItem={<PersonDetails itemId={selectedItem}/>}
      />
    )
  }  
}