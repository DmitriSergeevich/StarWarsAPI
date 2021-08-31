import React from 'react';
import PersonDetails from '../Details/PersonDetails';
import { PersonList } from '../ListOfItems/ListOfItems';
import { Row } from '../Row/Row';
import { withRouter } from 'react-router-dom';

const PeoplePage = ({ history, match }) => {  
  const { id } = match.params;
  return (
    <Row 
      leftItem={<PersonList onItemSelected={(id) => history.push(id)}/>}
      rightItem={<PersonDetails itemId={ id }/>}
    />
  )
}  

export default withRouter(PeoplePage)