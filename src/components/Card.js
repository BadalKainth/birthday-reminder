import React from "react";
import { getAge } from "../utils/date";

const Card = ({ person }) => {
  const { id, name, image, dob } = person;

  return (
    <article key={id} className="card">
      <img src={image} alt={name}></img>
      <div className="info">
        <h4>{name}</h4>
        <p>{dob}</p>
        <p>{getAge(dob)}</p>
      </div>
    </article>
  );
};

export default Card;
