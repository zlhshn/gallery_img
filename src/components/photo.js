import React from "react";

const Photo = ({ people }) => {
  return (
    <>
      {people.map((person, index) => {
        const { photographer, src } = person;
        return (
          <div key={index} className="image">
            <div className="img-container">
              <img src={src.large} alt={photographer} />
            </div>
            <div className="info">
              <h2>{photographer}</h2>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Photo;
