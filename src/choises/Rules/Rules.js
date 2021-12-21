import React from "react";
import ruleImg from '../../images/image-rules.svg'
import CloseImg from '../../images/icon-close.svg'
const Rules = () => {

  const roleClose = () => {
    document.querySelector('.rule__container').style.display = 'none'
    document.body.style.background =  'radial-gradient(hsl(214, 47%, 23%),hsl(237, 49%, 15%)'
  }

  return(
    <div className="rule__container">
      <div className="rule__header">
        <h2 className="rule__text">Rules</h2>
        <button onClick={roleClose} className="ruleClose"><img src={CloseImg} alt=""/></button>
      </div>
      <img src={ruleImg} alt=""/>
    </div>
  )
}
export default Rules