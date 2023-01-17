import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

//Displays timeline items and timeline.js info array.
function Timeline() {
  return (
    <div className='flex flex-col md:flex-row justify-center my-20'>
      <div className='w-full md:w-7/12'>
      <Title>My Programming Timeline</Title>
      {timeline.map(item => (
        <TimelineItem 
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
        />
      ))}
      </div>
    </div>
  )
}

export default Timeline;