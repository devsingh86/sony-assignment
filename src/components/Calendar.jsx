import React, { useState } from 'react';
import '../App.css';

export const eventData = {
    events: [
      {
        date: '2024-01-10',
        venue: 'City Hall Auditorium',
        eventName: 'Music Festival',
        eventTitle: 'Harmony in Motion',
        eventDescription:
          'A vibrant celebration of diverse musical genres featuring local and international artists.',
        bgColor: "#FFCCCC"
      },
      {
        date: '2024-02-15',
        venue: 'Convention Center',
        eventName: 'Tech Summit',
        eventTitle: 'InnovateX',
        eventDescription:
          'A gathering of tech enthusiasts and industry leaders discussing the latest innovations and trends.',
          bgColor: "#FFE5CC"
      },
      {
        date: '2024-01-22',
        venue: 'Central Park',
        eventName: 'Food Truck Rally',
        eventTitle: 'Flavors of the World',
        eventDescription:
          'Indulge in a culinary adventure with gourmet delights from around the globe.',
          bgColor: "#FFFFCC"
      },
      {
        date: '2024-03-05',
        venue: 'Art Gallery',
        eventName: 'Exhibition Opening',
        eventTitle: 'Artistry Unleashed',
        eventDescription:
          'Experience a showcase of groundbreaking contemporary artworks by emerging talents.',
        bgColor: "#E5FFCC"
      },
      {
        date: '2024-01-12',
        venue: 'Stadium Arena',
        eventName: 'Sports Championship',
        eventTitle: 'Victory Cup',
        eventDescription:
          'Witness thrilling sporting action as teams compete for the championship title.',
        bgColor: "#CCFFCC"
      },
      {
        date: '2024-03-20',
        venue: 'Community Center',
        eventName: 'Charity Gala',
        eventTitle: 'Hope for Tomorrow',
        eventDescription:
          'Join us for an elegant evening of philanthropy to support noble causes.',
        bgColor: "#CCFFE5"
      },
      {
        date: '2024-03-25',
        venue: 'Opera House',
        eventName: 'Cultural Performance',
        eventTitle: 'Rhythms of Tradition',
        eventDescription:
          'Immerse yourself in a captivating showcase of traditional music and dance.',
        bgColor: "#CCFFFF"
      },
      {
        date: '2024-04-02',
        venue: 'Outdoor Amphitheater',
        eventName: 'Film Screening',
        eventTitle: 'Cinematic Odyssey',
        eventDescription:
          'Enjoy an alfresco movie experience under the stars with classic and contemporary films.',
        bgColor: "#CCE5FF"
      },
      {
        date: '2024-04-10',
        venue: 'Botanical Gardens',
        eventName: 'Flower Show',
        eventTitle: 'Blossom Extravaganza',
        eventDescription:
          'Admire the beauty of nature with a stunning display of colorful blooms and floral arrangements.',
          bgColor: "#CCCCFF"
      },
      {
        date: '2024-04-18',
        venue: 'Historical Museum',
        eventName: 'Lecture Series',
        eventTitle: 'Enlightenment Talks',
        eventDescription:
          'Engage in thought-provoking discussions on history, science, and philosophy.',
          bgColor: "#E5CCFF"
      },
    ],
  };


const Calendar = ({ events }) => {
 const [month, setMonth] = useState(new Date().getMonth());
 const [year, setYear] = useState(new Date().getFullYear());
 const [selectedEvent, setSelectedEvent] = useState(null);

 const nextMonth = () => {
    setMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setYear((prevYear) => (prevMonth === 11 ? prevYear + 1 : prevYear));
 };

 const prevMonth = () => {
    setMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setYear((prevYear) => (prevMonth === 0 ? prevYear - 1 : prevYear));
 };

 const handleDateClick = (date) => {
    const event = events.find((event) => event.date === date);
    if (event) {
        console.log(event);
        setSelectedEvent(event);
    }
 };

 const renderDaysOfWeek = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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
        const event = events.find((event) => event.date === eventDate);
        const hasEvent = !!event;
        const bgColor = event ? event.bgColor : '';
        days.push(
            <div
                key={i}
                className={`cell ${hasEvent ? 'highlight' : ''}`}
                style={{backgroundColor: bgColor}}
                onClick={() => handleDateClick(eventDate)}
            >
                {i}
            </div>
        );
    }
    return days;
};

 return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth} className="buttons">Prev</button>
        <h2>{new Date(year, month).toLocaleString('default', { month: 'long' })} {year}</h2>
        <button onClick={nextMonth} className="buttons">Next</button>
      </div>
      <div className="grid days">
        {renderDaysOfWeek()}
      </div>
      <div className="grid date">
        {renderDaysOfMonth()}
      </div>
      {selectedEvent && (
        <div className="event-modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedEvent(null)}>
              &times;
            </span>
            <h2>{selectedEvent.eventName}</h2>
            <h3>{selectedEvent.eventTitle}</h3>
            <p>{selectedEvent.eventDescription}</p>
            <p>Venue: {selectedEvent.venue}</p>
          </div>
        </div>
      )}
    </div>
 );
};

export default Calendar;