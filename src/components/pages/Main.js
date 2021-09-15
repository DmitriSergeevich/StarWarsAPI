import React from "react";
import SwapiService from "../../services/SwapiService";
import { Button } from "../Button/Button";
import { FoundPeopleList } from "../FoundPeopleList/FoundPeopleList";
import { PaginationControl } from "../PaginationControl/PaginationControl";
import { Spiner } from "../Spiner/Spiner";
import './Main.css';

const Main = ({state, onChange, onInput, onChangePage, history}) => {
  const { nextPage, prevPage, foundCount, foundPeople, loading, term } = state;
  
  const matches = foundCount === 1 ? "match" : "matches";

  const foundMatches = foundCount !== null ? (
    <h6 className='found-count'>
      Found {foundCount} {matches}
    </h6>
  ) : null;
  
  const loader = loading ? <Spiner/> : null;

  return (
    <div>
      <h4 className="section-article">Find a character</h4>
      <div style={{ display: "flex" }}>
        <input
          value={term}
          type="text"
          className="form-control search-input"
          placeholder="Type to search"
          onChange={onChange}
          onKeyDown={(e)=> e.code === 'Enter' && onInput()}
        />
        <Button key={"find"} onClick={onInput} lable="Find" />
      </div>
      {foundMatches}
      {loader}
      <ul className="item-list list-group">{FoundPeopleList(foundPeople, history)}</ul>      
      {PaginationControl(nextPage, prevPage, foundCount, loading, onChangePage)}
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
    loading: false,
  };
  
  setAppState = this.props.setAppState;

  componentDidMount() {
   this.setState({...this.props.appState})
  }

  swapi = new SwapiService();

  onChange = (e) => {
    const term = e.target.value;

    if (term !== "" && term !== null) {
      this.setState({ term });
     
    } else {
      const clearState = {
        term: "",
        foundPeople: [],
        nextPage: null,
        prevPage: null,
        foundCount: null,
        loading: false,
      }

      this.setState(clearState)

      this.setAppState(clearState)
    }
  };
  
  onInput = () => {
    if (this.state.term !== "") {
      this.setState({ loading: true, foundPeople: [] });

      this.swapi.getSearchPeople(this.state.term)
        .then(({ foundPeople, dataPeople }) => {
          const searchData = {
            foundPeople,
            nextPage: dataPeople.next,
            prevPage: dataPeople.previous,
            foundCount: dataPeople.count,
            loading: false,
            term: this.state.term
          }

          this.setState(searchData)

          this.setAppState(searchData)
        }
      );
    }
  };

  onChangePage = (button) => {
    this.setState({
      loading: true, foundPeople: []
    })

    const pageURL =
      button.key === "next" ? this.state.nextPage : this.state.prevPage;

    this.swapi.getFoundPeoplePage(pageURL)
    .then(({ foundPeople, dataPeople }) => {
      const pageData = {
        foundPeople,
        nextPage: dataPeople.next,
        prevPage: dataPeople.previous,
        foundCount: dataPeople.count,
        loading: false,
        term: this.state.term
      }

      this.setState(pageData)

      this.setAppState(pageData)
    });
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