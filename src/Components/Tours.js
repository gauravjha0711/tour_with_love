import React from 'react'
import Card from './Card';
export default function Tours({tours , removeTour}) {
  return (
    <div className='container'>
        <div>
            <h2 className='title'>Tour with Love</h2>
        </div>
        <div className='cards'>
          {
            tours.map((tour) => {
              return <Card key={tour.id} {...tour}  removeTour={removeTour}></Card>
            })
            // <h1>Hello how are you </h1>
          }
          {/* {
            Array.isArray(tours) ? tours.map((tour) => {
              return <Card {...tour} removeTour={removeTour}></Card>
            }) : <p>No tours available</p>
          } */}
        </div>
    </div>
  );
}
