import { useState } from 'react'

const Button = (props) => {
    return(
        <button onClick={props.onClick}>{props.text}</button>
    )
}

const DisplayAnecdote = (props) => {
    return(
        <div>
            <h1>Anecdote of the day</h1>
            {props.anecdote} <br/> has {props.votes} votes
        </div>
    )
}

const DisplayHighest = (props) => {
    return(
        <div>
            <h1>Anecdote with most votes</h1>
            {props.anecdote} <br /> has {props.votes} votes
        </div>
    )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  const findMaxIndex = (arr) => {
  if (arr.length === 0) {
        return -1; 
    }
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
  }

  const highest = findMaxIndex(votes)


  const onButtonClick = () => {
    const randInt = Math.floor(Math.random() * anecdotes.length)
    console.log(randInt)
    setSelected(randInt)
  }

  const increaseVote = () => {
    const copy = [... votes]
    copy[selected] += 1
    setVotes(copy)
    console.log(votes)
  }



  return (
    <div>
      <DisplayAnecdote anecdote={anecdotes[selected]} votes={votes[selected]}/>
      <Button onClick={increaseVote} text={"vote"}/>
      <Button onClick={onButtonClick} text={"next anecdote"}/>
      <DisplayHighest anecdote={anecdotes[highest]} votes={votes[highest]}/>
    </div>
  )
}

export default App