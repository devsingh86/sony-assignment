import React, { useState, useEffect } from 'react';
import '../App.css';

const Calendar = () => {
 const [month, setMonth] = useState(new Date().getMonth());
 const [year, setYear] = useState(new Date().getFullYear());
 const [selectedEvent, setSelectedEvent] = useState(null);
 const [events, setEvents] = useState([]);

 useEffect(() => {
  fetch('/events.json')
    .then(response => response.json())
    .then(data => {
      setEvents(data);
      console.log(data);
    })
    .catch(error => console.error('Error:', error));
}, []);
 
 const nextMonth = () => {
    setMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setYear((prevYear) => (prevMonth === 11 ? prevYear + 1 : prevYear));
 };

 const prevMonth = () => {
    setMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setYear((prevYear) => (prevMonth === 0 ? prevYear - 1 : prevYear));
 };

 const handleDateClick = (date) => {
  if (!events) {
      console.log("Events data is not loaded yet");
      return;
  }

  const event = events.find((event) => event.launchDate.split('T')[0] === date);
  if (event) {
      console.log(event);
      setSelectedEvent(event);
  }
};

 const renderDaysOfWeek = () => {
    const days = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days.map((day, index) => <div key={index} className="cell">{day}</div>);
 };

 const renderDaysOfMonth = () => {
    const days = [];
    const totalDays = new Date(year, month + 1, 0).getDate();
    let startDay = new Date(year, month, 1).getDay();

    // Generate blank divs before the start day
    for (let i = 0; i < startDay; i++) {
        days.push(<div key={`blank-${i}`} className="cell"></div>);
    }

    for (let i = 1; i <= totalDays; i++) {
        const eventDate = new Date(year, month, i).toISOString().split('T')[0];
        const event = events.find((event) => event.launchDate.split('T')[0] === eventDate);
        const hasEvent = !!event;
        const bgImage = event ? `url(/images/${event.imageFilenameThumb})` : '';
        days.push(
            <div
              key={event ? event.id : i}
                className={`cell ${hasEvent ? 'highlight' : ''}`}
                style={{backgroundImage: bgImage}}
                onClick={() => handleDateClick(eventDate)}
            >
                <span>{i}</span>
            </div>
        );
    }
    return days;
};

 return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth} disabled={month === 0}><i className="ri-arrow-left-wide-line"></i></button>
        <h2>{new Date(year, month).toLocaleString('default', { month: 'long' })} {year}</h2>
        <button onClick={nextMonth} disabled={month === 11}><i className="ri-arrow-right-wide-line"></i></button>
      </div>  
      <div className="grid days">
        {renderDaysOfWeek()}
      </div>
      <div className="grid date">
        {renderDaysOfMonth()}
      </div>
      {selectedEvent && (
        <div className="event-modal">
          <div className="modal-content" style={{backgroundImage: `url(/images/${selectedEvent.imageFilenameFull})`}}>
            <span className="close" onClick={() => setSelectedEvent(null)}>
              &times;
            </span>
            
            <div className='event-desc'>
                <p>{selectedEvent.title}: {selectedEvent.summary}</p>
                <p className='font-xs'><b>Available {new Date(selectedEvent.launchDate).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</b></p>
            </div>
            <p><a className='learn-more-button' title='Learn More' href={selectedEvent.learnMoreLink}>Learn More</a><a className='buy-button' href={selectedEvent.purchaseLink}>Pre Order Now</a></p>
          </div>
        </div>
      )}
    </div>
 );
};

export default Calendar;