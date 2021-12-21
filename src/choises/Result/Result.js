import React from "react";

const Result = (props) => {
  const playAgain = () => {
    document.querySelector('.Chooses').style.display = 'flex'
    document.querySelector('.selection').style.display = 'none'
    document.querySelector('.choise-computer').classList.remove(`btn-${props.compChoise}`)
    document.querySelector('.choise-user').classList.remove(`btn-${props.userChoise}`)
  }
  return(
    <div className="selection">
      <div className="user-reslut">
        <h2>You picked</h2>
        <div className="choise choise-user">
          <span className="wrapper user-choise">
          </span>
        </div>
      </div>
      <div>
        <h1 className="big-text" id="result">{props.result}</h1>
        <button className="btn" id="resert" onClick={playAgain}>play again</button>
      </div>
      <div className="comp-reslut">
        <h2>The house picked</h2>
        <div className="choise choise-computer">
          <span className="wrapper computer-choise">
          </span>
        </div>
      </div>
    </div>
  )
}
export default Result