import React from 'react';
import { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Timeline.module.css'; // Optional, for additional styling

const Timeline = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      fetch('/api/timeline')
        .then(response => response.json())
        .then(data => setEvents(data));
    }, []);

    return (
    <VerticalTimeline>
        {events.map((event, index) => (
        <VerticalTimelineElement
            key={index}
            date={event.Date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">{event.Title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{event.Category}</h4>
            {event.PicturePath && <img src={event.PicturePath} alt={event.Title} className="event-picture"/>}
            <p>
            {event.Description}
            </p>
        </VerticalTimelineElement>
        ))}
    </VerticalTimeline>
    );
};

export default Timeline;