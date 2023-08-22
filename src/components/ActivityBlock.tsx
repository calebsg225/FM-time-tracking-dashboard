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

const ActivityBlock = ({ activityData, activeTimeframe }:ACTIVITYBLOCKPROPS) => {
  return (
    <div className='activity-block-container'>
      <div className='accent-bar' style={{ backgroundColor: (activityData.accentColor) }}>
        <Icons svgName={activityData.title} />
      </div>
      <div className='activity-data-display-container'></div>
    </div>
  )
}

export default ActivityBlock
