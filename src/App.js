
import React,{useState,useEffect} from 'react'
import './App.css'
import Score from './choises/TableScore/Score'
import './choises/Choise.css'
import Result from './choises/Result/Result'
import Rules from './choises/Rules/Rules'
function App() {

    const state = [
      {NameClass:'choise btn-paper',imageSrc:require('./images/icon-paper.svg').default,choise:'paper'},
      {NameClass:'choise btn-scissors',imageSrc:require('./images/icon-scissors.svg').default,choise:'scissors'},
      {NameClass:'choise btn-rock',imageSrc:require('./images/icon-rock.svg').default,choise:'rock'}
    ]
    const [userChoise, setUserChoise] = useState('')
    const [compChoise, setCompChoise] = useState('')
    const [result, setResult] = useState('')
    const [score,setScore] = useState(0)
    const choises = ['paper','scissors','rock'];

    const handleClick = (value) => {
      setUserChoise(value);
      pickRandomChoise()
      document.querySelector('.Chooses').style.display = 'none'
      document.querySelector('.selection').style.display = 'flex'
      document.querySelector('.choise-user').classList.add(`btn-${value}`)
      if(value === 'paper') {
        document.querySelector('.user-choise').innerHTML = `
        <img src=${state[0].imageSrc} alt=""/>
        `
      }
      else if(value === 'scissors') {
        document.querySelector('.user-choise').innerHTML = `
        <img src=${state[1].imageSrc} alt=""/>
        `
      }
      else if(value === 'rock') {
        document.querySelector('.user-choise').innerHTML = `
        <img src=${state[2].imageSrc} alt=""/>
        `
      }
    }

    const pickRandomChoise = () => {
      let rnd = choises[Math.floor(Math.random()*choises.length)]
      document.querySelector('.choise-computer').classList.add(`btn-${rnd}`)
      setCompChoise(rnd)
      
      if(rnd === 'paper') {
        document.querySelector('.computer-choise').innerHTML = `
        <img src=${state[0].imageSrc} alt=""/>
        `
      }
      else if(rnd === 'scissors') {
        document.querySelector('.computer-choise').innerHTML = `
        <img src=${state[1].imageSrc} alt=""/>
        `
      }
      else if(rnd === 'rock') {
        document.querySelector('.computer-choise').innerHTML = `
        <img src=${state[2].imageSrc} alt=""/>
        `
      }
      
    }

    useEffect(() => {
      // eslint-disable-next-line default-case
      switch (userChoise + compChoise) {
        case 'paperrock':
        case 'scissorspaper':
        case 'rockscissors':
          setResult('You Win')
          updateScore(1)
          break
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
          setResult('You Lose')
          updateScore(-1)
          break
        case 'paperpaper':
        case 'scissors':
        case 'rockrock':
          setResult('You Drow')
          updateScore(0)
      }
    }, [userChoise, compChoise])
    function updateScore(value) {
      setScore((score) => score+value)
    }

    const ruleClick = () => {
      document.querySelector('.rule__container').style.display = 'block'
      document.body.style.background =  'radial-gradient(hsl(214, 57%, 13%),hsl(237, 59%, 10%)'
    }
    return(
      <div className="App">
        <Score score={score}/>
        <div className='Chooses'>{
            state.map((post,index) => (
              <div className={post.NameClass} id='btn-circle' key={index++} onClick={() => handleClick(post.choise)}>
                <span className="wrapper">
                  <img src={post.imageSrc} alt={post.choise}/>
                </span>
              </div>
            ))
          }
        </div>
        <Result result={result} compChoise={compChoise} userChoise={userChoise}/>
        <button onClick={ruleClick} className="btn__rules">rules</button>
        <Rules/>
      </div>
    )
  }

export default App;
