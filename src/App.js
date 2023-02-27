import React, { useState } from "react";
import List from "./List";
import data from "./data";
import "./App.css";
function App() {
  const [persons, setPersons] = useState(data);

  return (
    <main className="main">
      <section className="title">
        <h1>BIRTHDAY REMINDER!</h1>
      </section>
      <h3>{persons.length} birthdays in the List</h3>
      <section className="container">
        <List persons={persons} />
      </section>
      <button className="button" onClick={() => setPersons([])}>
        Clear all
      </button>
    </main>
  );
}

export default App;
