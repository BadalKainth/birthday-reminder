import React from "react";
import Card from "./Card";

const List = ({ persons }) => {
  return (
    <div className="card-container">
      {persons.map((person) => {
        return <Card key={person.id} person={person} />;
      })}
    </div>
  );
};

export default List;
