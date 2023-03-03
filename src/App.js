import "./App.css";
import React from "react";

function App() {
  const [link, setLink] = React.useState();
  const [currentLink, setCurrentLink] = React.useState();

  function handleChangeText(event) {
    setLink(event.target.value);
  }

  function handleSubmit() {
    setCurrentLink(link);
  }

  return (
    <div className="App">
      <div className="inputField">
        <input
          type="text"
          className="text--field"
          placeholder="Paste your link here"
          onChange={handleChangeText}
        />

        <button className="btn" onSubmit={handleSubmit}>
          Submit
        </button>
      </div>
      <iframe
      title="This is unique title"
        id="widgetApi"
        src={`https://convert2mp3s.com/api/widget?url=${currentLink}`}
        width="100%"
        height="250px"
        allowtransparency="true"
        style={{ border: "none" }}
        className="kuchbhi"
      ></iframe>
    </div>
  );
}

export default App;
