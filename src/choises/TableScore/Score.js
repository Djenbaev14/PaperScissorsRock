import React from "react";
import './Score.css'
function Score(props) {
  return(
    <div className="tableContainer">
      <div className="tableText">
        <h2>ROCK</h2>
        <h2>PAPER</h2>
        <h2>SCISSORS</h2>
      </div>
      <div className="tableScore">
        <p className="score">Score</p>
        <h1 id="score">{props.score}</h1>
      </div>
    </div>
  )
}
export default Score;