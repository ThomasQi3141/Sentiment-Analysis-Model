import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import SmileFace from "./assets/smile_face.svg";
import FrownFace from "./assets/frown_face.svg";
import Footer from "./Components/Footer";

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
      {sentiment && (
        <div>
          <div className="prediction-wrapper">
            <h2>
              Predicted Sentiment:{" "}
              {sentiment >= 0.5 ? "Positive🙂" : "Negative🙁"}
            </h2>
          </div>
          <div className="prediction-wrapper">
            <h2>Sentiment Score (0-1): {sentiment}</h2>
          </div>
        </div>
      )}
      <Footer textColor={"white"}>
        &copy; {new Date().getFullYear()} Thomas Qi. All rights reserved.{" "}
      </Footer>
    </>
  );
}

export default App;
