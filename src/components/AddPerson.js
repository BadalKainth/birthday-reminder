import { useState } from "react";

export default function AddPerson({ addNewPerson }) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  //   const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addNewPerson(name, dob, `https://i.pravatar.cc/150?u=${name}`);
  }

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <div className="name">
        <h3>Name</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="DOB">
        <h3>DOB</h3>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        ></input>
      </div>
      {/* <div>
        <h3>Avatar</h3>
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>
      </div> */}
      <div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
    </form>
  );
}
