import React, { useState } from 'react'
import './NewGoal.css'
const NewGoal = (props) => {
    const [enteredText, setEnteredText] = useState('')
    const goalHandler = (event)=> {
        event.preventDefault()
    
    const newGoal = {
        id: Math.random().toString(),
        text: enteredText
    }
    setEnteredText('')
    props.addNewGoal(newGoal)
    }
    const updateGoalHandler = (event)=>{
         setEnteredText(event.target.value)
    }
    return (
        <form className='new-goal'onSubmit={goalHandler}>
            <input type='text' value = {enteredText} onChange={updateGoalHandler} ></input>
            <button type='submit'>Add Goal</button>
        </form>
    )
}

export default NewGoal