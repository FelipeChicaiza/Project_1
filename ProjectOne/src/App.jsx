import React from 'react'
import './App.css';
import EventsCard from './components/EventsCard';
import foodimg from './assets/food.png';
import thecave from './assets/thecave.jpg';
import agave from './assets/agave.png';
import twinpeaks from './assets/twinpeaks.jpg';
import fritanga from './assets/fritanga.jpg';
import talkingtacos from './assets/talkingtacos.jpg';
import pollotropical from './assets/pollotropical.jpg';
import flanigans from './assets/flanigans.jpg';
import havana from './assets/havana.jpg';
import texas from './assets/texas.jpg';
import polonorte from './assets/polonorte.jpg';


function App () {
  const events = [
    {
      title: 'The Cave',
      date: 'June 20th, 2021',
      image: thecave,
      foodType: 'BBQ',
      url: 'https://www.thecavefl.com/?gad_source=1&gclid=Cj4KCQjwo8S3BhDeARItAFRmkOO6wKws0ToMRHIfI89iVkpaS4mYkxw-NVwUpSWHZ6zA0h0iWo3cncGYGgJJrRAC8P8HAQ',
    },
    {
      title: 'Agave Bandido',
      date: 'July 4th, 2021',
      image: agave,
      foodType: 'Potluck',
      url: 'https://www.agavebandido.com/',
    },
    {
      title: 'Twin Peaks',
      date: 'August 1st, 2021',
      image: twinpeaks,
      foodType: 'Picnic',
      url: 'https://twinpeaksrestaurant.com/locations/pembroke-pines-fl',
    },
    {
      title: 'Fritanga Diner',
      date: 'September 5th, 2021',
      image: fritanga,
      foodType: 'Brunch',
      url: 'http://fritangadiner.com/',
    },
    {
      title: 'Talkin Tacos Miramar',
      date: 'October 3rd, 2021',
      image: talkingtacos,
      foodType: 'Dinner',
      url: 'https://talkintacos.net/miramar',
    },
    {
      title: 'Pollo Tropical',
      date: 'November 7th, 2021',
      image: pollotropical,
      foodType: 'Breakfast'
    },
    {
      title: 'Flanigans',
      date: 'November 7th, 2021',
      image: flanigans,
      foodType: 'Breakfast'
    },
    {
      title: 'Havana 1957',
      date: 'November 7th, 2021',
      image: havana,
      foodType: 'Breakfast'
    },
    {
      title: 'Texas Roadhouse',
      date: 'November 7th, 2021',
      image: texas,
      foodType: 'Breakfast'
    },
    {
      title: 'Polo Norte Miramar',
      date: 'November 7th, 2021',
      image: polonorte,
      foodType: 'Breakfast'
    },
  ];

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '20px',
    gap: '20px',
    url: '',
 
  };

  const imagestyle = {
    width: '65px',
    height: 'auto',
  };

  return (
    <div className='App'>
      <img style={imagestyle} src={foodimg}/>
      <h2>Food Near Pembroke Pines🚩</h2>
      <div style={containerStyle}>
        {events.map((event, index) => (
          <EventsCard
          image={event.image}
          title={event.title}
          date={event.date}
          typeOfFood={event.foodType}
          url={event.url}   
        />
        ))}
      </div>
    </div>
  )
}

export default App
