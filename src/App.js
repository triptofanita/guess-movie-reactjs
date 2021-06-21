import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const emptyInput = "";
  const min = 0;
  //const minLives = 0;
  const [inputField, setInputField] = useState(emptyInput);
  const [score, setScore] = useState(min);
  //const [lives, setLives] = useState(minLives);

  const movies = [
    { title: "😈👭👭", answer: "Mean girls" },
    { title: "😎😎👽🚀👾", answer: "Men in black" },
    { title: "😈👗👠", answer: "Devil wears Prada" },
    { title: "🤓⚡️💥🧙🏻‍♂️", answer: "Harry Potter" },
    { title: "💍💍💍👑🧝🏻‍♂️", answer: "Lord of the rings" },
    { title: "🏫🎸🎤", answer: "School of Rock" }
  ];

  //const emoji = movies.title;
  //const correctAnswer = movies.answer;

  function handleGivenAnswer(e) {
    setInputField(e.target.value);
  }

  function handleSubmit() {
    const givenAnswer = inputField.toLowerCase();
    if (movies[score].answer === givenAnswer) {
      setInputField(emptyInput);
      return setScore(score + 1);
    } else {
      //disminuir una vida
      setInputField(emptyInput);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Guess the movie</h1>
        <h3>Score:{score}</h3>
        <h3>Lives:</h3>
      </header>
      <section>
        <span role="img">{movies[0].title}</span>
        <p> Type your answer </p>
        <input
          className="for__answer"
          type="text"
          value={inputField}
          onChange={handleGivenAnswer}
        />
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </section>
    </div>
  );
}
