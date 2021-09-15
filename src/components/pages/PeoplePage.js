import React from 'react';
import { PersonList } from '../ListOfItems/ListOfItems';
import { withRouter } from 'react-router-dom';

const PeoplePage = ({ history, match }) => {
  return (    
    <PersonList onItemSelected={(id) => history.push(id)}/>
  )
}  

export default withRouter(PeoplePage)