import React from "react";
import SwapiService from "../../services/SwapiService";
import { Button } from "../Button/Button";
import { FoundPeopleList } from "../FoundPeopleList/FoundPeopleList";

const Main = ({state, onChange, onInput, onChangePage, history}) => {
  const { nextPage, prevPage, foundCount, foundPeople } = state;

  const prevButton = prevPage ? (
    <Button
      key={"prev"}
      onClick={() => onChangePage(prevButton)}
      lable="&lt; Prev"
    />
  ) : null;

  const nextButton = nextPage ? (
    <Button
      key={"next"}
      onClick={() => onChangePage(nextButton)}
      lable="Next &gt;"
    />
  ) : null;
  
  const matches = foundCount === 1 ? "match" : "matches";

  const foundMatches = foundCount !== null ? (
    <h4>
      Found {foundCount} {matches}
    </h4>
  ) : null;

  return (
    <div>
      <h2>Find a character</h2>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          className="form-control search-input"
          placeholder="Type to search"
          onChange={onChange}
        />
        <Button key={"find"} onClick={onInput} lable="Find" />
      </div>
      {foundMatches}
      <ul className="item-list list-group">{FoundPeopleList(foundPeople, history)}</ul>
      <div className="btn-group">
        {prevButton}
        {nextButton}
      </div>
    </div>
  );
};

export default class MainContainer extends React.Component {
  state = {
    term: "",
    foundPeople: [],
    nextPage: null,
    prevPage: null,
    foundCount: null,
  };

  swapi = new SwapiService();

  onChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
  };

  onInput = () => {
    this.swapi.getSearchPeople(this.state.term)
    .then(({ foundPeople, dataPeople }) => this.setState({
        foundPeople,
        nextPage: dataPeople.next,
        prevPage: dataPeople.previous,
        foundCount: dataPeople.count,
      })
    );
  }

  onChangePage = (button) => {
    const page =
      button.key === "next" ? this.state.nextPage : this.state.prevPage;

    this.swapi.getFoundPeoplePage(page).then(({ foundPeople, dataPeople }) => this.setState({
      foundPeople,
      nextPage: dataPeople.next,
      prevPage: dataPeople.previous,
      foundCount: dataPeople.count,
    }));
  };

  render() {
    return (
      <Main
        state={this.state}
        onChange={this.onChange}
        onInput={this.onInput}
        onChangePage={this.onChangePage}
        history={this.props.history}
      />
    );
  }
}