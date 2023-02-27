import React from "react";

const Card = ({ person }) => {
  const { id, name, age, image, DOB } = person;
  return (
    <article key={id} className="card">
      <img src={`https://i.pravatar.cc/150?u=${name}`} alt={name}></img>
      <div className="info">
        <h4>{name}</h4>
        <p>{DOB}</p>
        <p>{age}</p>
      </div>
    </article>
  );
};

export default Card;
