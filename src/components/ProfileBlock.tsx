import TimeframeButton from './TimeframeButton';
import './css/profileBlock.css';

interface PROFILEBLOCKPROPS {
  setActiveTimeframe: Function,
  activeTimeframe: string
}

const ProfileBlock = ({setActiveTimeframe, activeTimeframe}:PROFILEBLOCKPROPS) => {
  return (
    <div className='profile-block-container'>
      <div className='profile-info-container'>
        <img src={require("../images/image-jeremy.png")} alt='jeremy-bearimy'/>
        <div className='profile-text'>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className='button-container'>
        <TimeframeButton buttonName='daily' activeTimeframe={activeTimeframe} setActiveTimeframe={setActiveTimeframe}/>
        <TimeframeButton buttonName='weekly' activeTimeframe={activeTimeframe} setActiveTimeframe={setActiveTimeframe}/>
        <TimeframeButton buttonName='monthly' activeTimeframe={activeTimeframe} setActiveTimeframe={setActiveTimeframe}/>
      </div>
    </div>
  )
}

export default ProfileBlock
