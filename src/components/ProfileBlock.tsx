import TimeframeButton from './TimeframeButton';
import './css/profileBlock.css';

interface PROFILEBLOCKPROPS {
  setActiveTimeframe: Function,
  activeTimeframe: string
}

const ProfileBlock = ({setActiveTimeframe, activeTimeframe}:PROFILEBLOCKPROPS) => {
  return (
    <section className='profile-block-container'>
      <div className='profile-info-container'>
        <img src={require("../images/image-jeremy.png")} alt='jeremy-bearimy'/>
        <div className='profile-text'>
          <p className='profile-subtitle'>Report for</p>
          <p className='profile-name'>Jeremy Robson</p>
        </div>
      </div>
      <nav className='button-container'>
        <TimeframeButton buttonName='daily' activeTimeframe={activeTimeframe} setActiveTimeframe={setActiveTimeframe}/>
        <TimeframeButton buttonName='weekly' activeTimeframe={activeTimeframe} setActiveTimeframe={setActiveTimeframe}/>
        <TimeframeButton buttonName='monthly' activeTimeframe={activeTimeframe} setActiveTimeframe={setActiveTimeframe}/>
      </nav>
    </section>
  )
}

export default ProfileBlock
