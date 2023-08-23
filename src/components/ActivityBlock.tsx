import React from 'react';
import './css/activityBlock.css';
import Icons from './Icons';

interface ACTIVITYBLOCKPROPS {
  activityData: {
    title: string,
    accentColor: string,
    timeframes: {
      [key: string]: {
        current: number,
        previous: number
      }
    }
  },
  activeTimeframe: string
}

const ActivityBlock = ({ activityData: {title, accentColor, timeframes}, activeTimeframe }:ACTIVITYBLOCKPROPS) => {
  return (
    <div className='activity-block-container'>
      <div className='accent-bar' style={{ backgroundColor: (accentColor) }}>
        <Icons svgName={title} />
      </div>
      <div className='activity-data-display-container'>
        <header className='activity-header'>
          <p>{title}</p>
          <div className='ellipse-svg'>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
          </div>
        </header>
        <section className='activity-main'>
          <h1>{timeframes[activeTimeframe].current}hrs</h1>
          <p>Last Week - {timeframes[activeTimeframe].previous}hrs</p>
        </section>
      </div>
    </div>
  )
}

export default ActivityBlock
