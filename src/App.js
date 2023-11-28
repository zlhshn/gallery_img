import React, { useState } from "react";
import data from "./components/data";
import Photo from "./components/photo";

function App() {

  const [people,setPeople] = useState(data);
  return (
    <main>
      <h1>Photo Gallery</h1>
      <div className="container">
      <div className="photo">
           <Photo people ={people} />
     
        </div>
      </div>
    </main>
  );
}

export default App;
