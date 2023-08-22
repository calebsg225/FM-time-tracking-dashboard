import './css/timeframeButton.css';

interface TIMEFRAMEBUTTONPROPS {
  buttonName: string;
  activeTimeframe: string;
  setActiveTimeframe: Function;
}

const TimeframeButton = ({buttonName, activeTimeframe, setActiveTimeframe}:TIMEFRAMEBUTTONPROPS) => {
  return (
    <button onClick={() => setActiveTimeframe(buttonName)} className={`timeframe-button ${buttonName === activeTimeframe ? 'selected-button' : 'unselected-button'}`}>
      {buttonName.charAt(0).toUpperCase() + buttonName.slice(1)}
    </button>
  )
}

export default TimeframeButton
