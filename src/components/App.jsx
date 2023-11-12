
import { useState } from 'react';
import { Section } from './section/Section';
export const App= () =>{
  const [good, setGood]=useState(0);
  const [neutral, setNeutral]=useState(0);
  const [bad, setBad]=useState(0);
  
 const onLeaveFeedback = (option) => {
    switch (option) {
      case 'good' : setGood(prev =>(prev+1)); 
      break;
      case 'neutral' : setNeutral(prev => prev+1);
      break;
      case 'bad' : setBad(prev => prev+1);
      break;
      default: return


    }
    
  };

  const countTotalFeedback = () => {
    return good+bad+neutral
  
  };
 const countPositiveFeedbackPercentage =() =>{
      return Math.round((good/countTotalFeedback())*100)||0;
    
  };
  const state = {good, neutral, bad}
    return <div>
      <Section
      state={state}
      onLeaveFeedback={onLeaveFeedback}
      countTotalFeedback={countTotalFeedback()}
      countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}/>
    </div>;
  
}
