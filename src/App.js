import React, { useState } from "react";
import List from "./List";
import data from "./data";
import "./App.css";
function App() {
  const [persons, setPersons] = useState(data);
  const [show, setShow] = useState(false);
  return (
    <>
      <main className="main">
        <section className="title">
          <h1>BIRTHDAY REMINDER!</h1>
        </section>
        <section>
          {show ? (
            <form className="addForm">
              <div className="name">
                <h3>Name</h3>
                <input></input>
              </div>
              <div className="DOB">
                <h3>DOB</h3>
                <input></input>
              </div>
              <div className="age">
                <h3>Age</h3>
                <input></input>
              </div>
              <div>
                <h3>Avatar</h3>
                <input type={Image}></input>
              </div>
            </form>
          ) : null}
          <button className="addDOB" onClick={() => setShow(!show)}>
            Add New
          </button>
        </section>
        <h2>{persons.length} Birthdays in the List</h2>
        <section className="container">
          <List persons={persons} />
        </section>
        <button className="button" onClick={() => setPersons([])}>
          Clear all
        </button>
      </main>
      <footer className="footer">
        <p>HTML5, CSS3, Javascript & ReactJS is used to build this project.</p>
      </footer>
    </>
  );
}

export default App;
