import React, { useEffect, useState } from "react";
import List from "./components/List";
import { API_URL } from "./config";
import "./App.css";
import AddPerson from "./components/AddPerson";
import axios from "axios";

axios.defaults.baseURL = API_URL;

function App() {
  const [persons, setPersons] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function getBirthdays() {
      const response = await axios.get(`/birthdays`);
      setPersons(response.data);
    }
    getBirthdays();
  }, []);

  async function addNewPerson(name, dob, image) {
    if (!name || !dob || !image) {
      alert("Please fill all the fields");
    } else {
      const response = await axios.post(`/birthdays`, {
        name,
        dob,
        image,
      });
      const newData = [...persons, response.data];
      setPersons(newData);
      setShow(false);
    }
  }

  return (
    <>
      <main className="main">
        <section className="title">
          <h1>BIRTHDAY REMINDER!</h1>
        </section>
        <section>
          {show ? <AddPerson addNewPerson={addNewPerson} /> : null}
          {!show ? (
            <button className="button" onClick={() => setShow(!show)}>
              Add New
            </button>
          ) : null}
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
        <p>
          HTML5, CSS3, Javascript & ReactJS is used to build this project by
          Badal Kainth.
        </p>
      </footer>
    </>
  );
}

export default App;
