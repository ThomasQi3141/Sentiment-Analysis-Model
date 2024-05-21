import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import SmileFace from "./assets/smile_face.svg";
import FrownFace from "./assets/frown_face.svg";

function App() {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = async () => {
    if (text === "") {
      alert("Empty Text Submission");
    } else {
      setClicked(true);
      try {
        let url = JSON.stringify(import.meta.env["VITE_REACT_API_URL"]);
        url = url.substring(1, url.length - 1);
        // Make the POST request using axios
        const response = await axios.post(
          url,
          new URLSearchParams({
            text: text,
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setSentiment(response.data.prediction);
        setClicked(false);
      } catch (error) {
        console.log("Error:", error);
        setClicked(false);
      }
    }
  };

  const renderSentiment = () => {
    if (sentiment === "") {
      return <h2></h2>;
    } else if (sentiment === "Positive") {
      return <h2>🙂</h2>;
    } else {
      return <h2>🙁</h2>;
    }
  };

  return (
    <>
      <h1>Sentiment Analysis</h1>
      <div className="wrapper">
        <textarea
          placeholder="Enter a movie review to analyze..."
          value={text}
          onChange={handleChange}
        />
      </div>
      <div className="wrapper">
        {!clicked ? (
          <button className="button-17" onClick={handleClick}>
            Predict Sentiment
          </button>
        ) : (
          <>
            <div className="loader"></div>
            <div className="loading-text">Retrieving Prediction...</div>
          </>
        )}
      </div>
      <div className="prediction-wrapper">
        {renderSentiment()}
        <h2>{sentiment}</h2>
      </div>
    </>
  );
}

export default App;
