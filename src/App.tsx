import { useState } from 'react';
import './App.css';
import activitiesData from './data/data.json';
import ActivityTrackerBlock from './components/ActivityTrackerBlock';
import ProfileBlock from './components/ProfileBlock';

function App() {
  const [ activeTimeframe, setActiveTimeframe ] = useState(0);
  return (
    <div className="App">
      <main>
        <ProfileBlock setActiveTimeframe={setActiveTimeframe} activeTimeframe={activeTimeframe} />
        <section className='activity-block-container'>
          {activitiesData.map((activityData) => {
            return (
              <ActivityTrackerBlock activityData={activityData} activeTimeframe={activeTimeframe} />
            )
          })}
        </section>
      </main>
    </div>
  );
}

export default App;
