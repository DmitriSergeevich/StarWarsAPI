import React from "react";

export const FoundPeopleList = (foundPeople, history) => {
 return foundPeople.map(item => {
    const { id, name } = item;
    const stringedId = String(id);
    return (
      <li
        className="list-group-item"
        key={ id }
        onClick={(id) => history.push("/people/" + stringedId)}
      >
        { name }
      </li>
    );
  });  
}