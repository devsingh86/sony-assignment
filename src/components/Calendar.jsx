import React, { useState } from 'react';
import '../App.css';

export const eventData = {
    events: [
      {
        "id": "18213007415c6b3aceb83604",
        "launchDate": "2024-01-13T09:01:30.152Z",
        "title": "Gran Turismo 7",
        "summary": "Gran Turismo 7 brings together the very best features of the Real Driving Simulator. Whether you’re a competitive or casual racer, collector, tuner, livery designer or photographer – find your line with a staggering collection of game modes including fan-favorites like GT Campaign, Arcade and Driving School.",
        "imageFilenameThumb": "gran-turismo-7__1x1.webp",
        "imageFilenameFull": "gran-turismo-7__16x9",
        "learnMoreLink": "https://www.playstation.com/en-us/games/gran-turismo-7/",
        "purchaseLink": "https://www.playstation.com/en-us/games/gran-turismo-7/#buy-now",
        "bgColor": "#FFCCCC"
      },
      {
        "id": "939705715c6b3898dd3da5",
        "launchDate": "2024-01-29T21:32:46.879Z",
        "title": "Metal Gear Solid: The Phantom Pain",
        "summary": "Ushering in a new era for the franchise with cutting-edge technology powered by the Fox Engine, MGSV: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.",
        "imageFilenameThumb": "metal-gear-solid__1x1.jpeg",
        "imageFilenameFull": "metal-gear-solid__16x9",
        "learnMoreLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/",
        "purchaseLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/#buy-now",
        "bgColor": "#FFE5CC"
      },
      {
        "id": "1785476915c6b3a21620b48",
        "launchDate": "2024-01-31T19:45:11.811Z",
        "title": "Megaman 11",
        "summary": "Mega Man is back! The newest entry in this iconic series blends classic, challenging 2D platforming action with a fresh look. The stunning new visual style refreshes the series' iconic colorfulness, combining hand-drawn environments with detailed, 3D character models.",
        "imageFilenameThumb": "megaman-11__1x1.webp",
        "imageFilenameFull": "megaman-11__16x9",
        "learnMoreLink": "https://www.playstation.com/en-us/games/mega-man-11/",
        "purchaseLink": "https://www.playstation.com/en-us/games/mega-man-11/#buy-now",
        "bgColor": "#FFFFCC"
      },
      {
        "id": "2025599465c6b3a81c11541",
        "launchDate": "2024-02-11T15:21:14.503Z",
        "title": "Resident Evil 4",
        "summary": "A thrilling reimagining of Capcom's groundbreaking action-horror classic. Resident Evil 4, 2005’s legendary survival horror, is brought fully up-to-date in this ground-up remake.",
        "imageFilenameThumb": "resident-evil-4__1x1.webp",
        "imageFilenameFull": "resident-evil-4__16x9",
        "learnMoreLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/",
        "purchaseLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/#buy-now",
        "bgColor": "#E5FFCC"
      },
      {
        "id": "2143690395c6b39ea9621c0",
        "launchDate": "2024-02-18T04:21:17.875Z",
        "title": "Hotline Miami",
        "summary": "Hotline Miami is a high-octane action game overflowing with raw brutality, hard-boiled gunplay and skull crushing close combat. Set in an alternative 1989 Miami, you will assume the role of a mysterious antihero on a murderous rampage against the shady underworld at the behest of voices on your answering machine. Soon you'll find yourself struggling to get a grip of what is going on and why you are prone to these acts of violence.",
        "imageFilenameThumb": "hotline-miami__1x1.webp",
        "imageFilenameFull": "hotline-miami__16x9",
        "learnMoreLink": "https://www.playstation.com/en-us/games/hotline-miami/",
        "purchaseLink": "https://www.playstation.com/en-us/games/hotline-miami/#buy-now",
        "bgColor": "#CCFFCC"
      },
      {
        "id": "4692393625c6b390c959715",
        "launchDate": "2024-03-19T00:29:27.528Z",
        "title": "Spiderman 2",
        "summary": "BE GREATER. TOGETHER. Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel’s Spider-Man franchise for PS5. <br> Swing, jump and utilize the new Web Wings to travel across Marvel’s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.",
        "imageFilenameThumb": "spiderman-2__1x1.webp",
        "imageFilenameFull": "spiderman-2__16x9",
        "learnMoreLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/",
        "purchaseLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/#buy-now",
        "bgColor": "#CCFFE5"
      },
      {
        "id": "6418261375c6b39f9246ff9",
        "launchDate": "2024-03-05T02:50:49.950Z",
        "title": "Final Fantasy XVI",
        "summary": "Enter the dark fantasy world of Valisthea in this highly anticipated single-player action RPG. <br>The 16th standalone entry in the legendary Final Fantasy series marks a darker turn for the RPG franchise, with a complex tale of revenge, power struggles and unavoidable tragedy. <br>Final Fantasy XVI reimagines the series' iconic summons as Eikons. These deadly creatures are housed within Dominants, men and women who inherit their immense power at birth - whether they like it or not.",
        "imageFilenameThumb": "final-fantasy-xvi__1x1.webp",
        "imageFilenameFull": "final-fantasy-xvi__16x9",
        "learnMoreLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/",
        "purchaseLink": "https://www.playstation.com/en-us/games/final-fantasy-xvi/#buy-now",
        "bgColor": "#CCFFFF"
      },
      {
        "id": "6615829505c6b38b4e30e47",
        "launchDate": "2024-04-19T10:14:52.687Z",
        "title": "Hogwarts Legacy",
        "summary": "Experience Hogwarts in the late 1800s and decide the fate of the wizarding world.",
        "imageFilenameThumb": "hogwarts-legacy__1x1.webp",
        "imageFilenameFull": "hogwarts-legacy__16x9",
        "learnMoreLink": "https://www.playstation.com/en-us/games/hogwarts-legacy/",
        "purchaseLink": "https://www.playstation.com/en-us/games/hogwarts-legacy/#buy-now",
        "bgColor": "#CCE5FF"
      },
      {
        "id": "7060050195c6b3a514f7358",
        "launchDate": "2024-04-20T14:36:38.034Z",
        "title": "Fall Guys",
        "summary": "Stumble towards greatness.<br>Fall Guys is a free, cross-platform, massively multiplayer, party royale game where you and your fellow contestants compete through escalating rounds of absurd obstacle course chaos until one lucky victor remains!",
        "imageFilenameThumb": "fall-guys__1x1.webp",
        "imageFilenameFull": "fall-guys__16x9",
        "learnMoreLink": "https://www.playstation.com/en-us/games/fall-guys-ultimate-knockout/",
        "purchaseLink": "https://www.playstation.com/en-us/games/fall-guys-ultimate-knockout/#buy-now",
        "bgColor": "#CCCCFF"
      }

      
    ]
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
  console.log(date);
    const event = events.find((event) => event.launchDate.split('T')[0] === date);
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
        console.log(eventDate);
        const event = events.find((event) => event.launchDate.split('T')[0] === eventDate);
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
        <button onClick={prevMonth} className="buttons" disabled={month === 0}>Prev</button>
        <h2>{new Date(year, month).toLocaleString('default', { month: 'long' })} {year}</h2>
        <button onClick={nextMonth} className="buttons" disabled={month === 11}>Next</button>
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
            
            <div className='event-image-desc'>
              <img src={`/images/${selectedEvent.imageFilenameThumb}`}  />
              <div>
                <h3>{selectedEvent.title}</h3>
                <p className='font-xs'>Date: {selectedEvent.launchDate.split('T')[0]}</p>
                <p>{selectedEvent.summary} <a title='Learn More' href={selectedEvent.learnMoreLink}>Learn More</a></p>
              </div>
            </div>
            <p className='text-right'><a className='buttons' href={selectedEvent.purchaseLink}>Buy</a></p>
          </div>
        </div>
      )}
    </div>
 );
};

export default Calendar;