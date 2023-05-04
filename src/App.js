import React, { useState } from 'react';
import GoalList from './components/Goallist/Goallist';
import './App.css'
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const [goallists, setGoallistHandler] = useState([
    {id: 'cg1' , text: 'This is the first goal'},
    {id: 'cg2' , text: 'This is the second goal'},
    {id: 'cg3' , text: 'This is the third goal'}
  ])
  
  const addGoalHandler = (newGoals)=>{
    setGoallistHandler(previousGoals=>previousGoals.concat(newGoals))
  }
  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <NewGoal addNewGoal = {addGoalHandler}/>
      <GoalList goals = {goallists}/>
    </div>
    
  );
};

export default App;
