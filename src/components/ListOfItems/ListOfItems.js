import React from "react";
import WithData from '../HOChelpers/WithData';
import { WithSwappiService } from "../HOChelpers/WithSwappiService";
import { ItemList } from '../ItemList/ItemList';

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }    
}

const renderName = ({ name }) => <span>{name}</span>
const renderNameAndModel = ({ name, model }) => <span>{`${name} (${model})`}</span>

const mapPersonMethodsToProps = (swappi) => {
  return {
    getData: swappi.getAllPeople,
  }
}
const mapPlanetMethodsToProps = (swappi) => {
  return {
    getData: swappi.getAllPlanet,
  }
}
const mapStarshipMethodsToProps = (swappi) => {
  return {
    getData: swappi.getAllStarships,
  }
}

const PersonList = WithSwappiService( WithData(
                    withChildFunction(ItemList, renderName)), mapPersonMethodsToProps);
const StarshipList = WithSwappiService( WithData(
                      withChildFunction(ItemList, renderNameAndModel)), mapStarshipMethodsToProps);
const PlanetList = WithSwappiService(WithData(
                     withChildFunction(ItemList, renderName)), mapPlanetMethodsToProps);

export {PersonList, StarshipList, PlanetList}