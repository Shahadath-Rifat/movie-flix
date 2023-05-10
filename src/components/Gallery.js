import React from 'react';

function Gallery(props) {
  return (
    <section className='grid'>
    <p>Now Showing</p>
    <section className="gallery">
      {props.images.map(image => (
        <img key={image} src={image} alt="gallery item" />
      ))}
    </section>

    <p>Coming Soon</p>
    <section className="gallery">
      {props.images.map(image => (
        <img key={image} src={image} alt="gallery item" />
      ))}
    </section>

    <p>Top Picks</p>
    <section className="gallery">
      {props.images.map(image => (
        <img key={image} src={image} alt="gallery item" />
      ))}
    </section>
    
    </section>
  );
}

export default Gallery;