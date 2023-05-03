import React from 'react'
import './NewGoal.css'
const NewGoal = () => {

    const goalHandler = (event)=> {
          event.preventDefault()
    }

    const newGoal = {
        id: Math.random().toString(),
        text: 'My new Goal'
    }
    
    return (
        <form className='new-goal'>
            <input type='text' onSubmit={goalHandler}></input>
            <button type='submit'>Add Goal</button>
        </form>
    )
}

export default NewGoal