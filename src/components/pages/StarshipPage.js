import React from 'react';
import StarshipDetails from '../Details/StarshipDetails';
import { StarshipList } from '../ListOfItems/ListOfItems';
import { Row } from '../Row/Row';

export default class StarshipPage extends React.Component {
  
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
        leftItem={<StarshipList onItemSelected={this.onItemSelected}/>}
        rightItem={<StarshipDetails itemId={selectedItem}/>}
      />
    )
  }  
}