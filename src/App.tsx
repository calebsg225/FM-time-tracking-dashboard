import { useState } from 'react';
import './App.css';
import activitiesData from './data/data.json';
import ActivityBlock from './components/ActivityBlock';
import ProfileBlock from './components/ProfileBlock';

function App() {
  const [ activeTimeframe, setActiveTimeframe ] = useState('weekly');
  return (
    <main className="App">
      <ProfileBlock setActiveTimeframe={setActiveTimeframe} activeTimeframe={activeTimeframe} />
      <section className='activities-block-container'>
        {activitiesData.map((activityData) => {
          return (
            <ActivityBlock activityData={activityData} activeTimeframe={activeTimeframe} />
          )
        })}
      </section>
    </main>
  );
}

export default App;
