import { useState } from 'react'

const Button = (props) => {
    return(
        <button onClick={props.onClick}>{props.text}</button>
    )
}

const StatisticLine = (props) => {
    return(
        <div>{props.text} {props.val} </div>
    )
}

const Statistics = (props) => {
     console.log(props)
     const total = props.good + props.bad + props.neutral
     //console.log(total)
     const avg = (props.good - props.bad) / total
     const perpos = (props.good / total)*100
     if (total==0) {
        return <div>
                <h2>Estadísticas</h2>
                No hay comentario
            </div>
     }
    return(
        <div>
            <h2>Estadísticas</h2>
            <table>
                <tbody>
                    <tr><td><StatisticLine text='bueno' val={props.good} /></td></tr>
                    <tr><td><StatisticLine text='mal' val={props.bad} /></td></tr>
                    <tr><td><StatisticLine text='neutro' val={props.neutral} /></td></tr>
                    <tr><td><StatisticLine text='suma' val={total} /></td></tr>
                    <tr><td><StatisticLine text='promedio' val={avg} /></td></tr>
                    <tr><td><StatisticLine text='positivo' val={perpos + '%'} /></td></tr>
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const newGood = good + 1
    setGood(newGood)
    //console.log(good)
  }

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
  }

  const handleBadClick = () => {
    const newBad = bad + 1
    setBad(newBad)
  }

  return (
    <div>
      <h1>Dar comentario</h1>
      <Button onClick={handleGoodClick} text={'bueno'}/>
      <Button onClick={handleNeutralClick} text={'neutro'}/>
      <Button onClick={handleBadClick} text={'mal'}/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App