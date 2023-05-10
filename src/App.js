

import './style/index.css';
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Button from './components/Button';
import Gallery from './components/Gallery';
import Footer from './components/Footer';




function App() {
  const bannerProps = {
    title: 'Discover the Latest Blockbusters and Timeless Classics',
    text: `Welcome to MovieFlix, your ultimate source for all things movies! Our extensive collection includes 
    the latest releases, timeless classics, and everything in between. Whether you're in the mood for action, romance,
    drama, or comedy, we have something for everyone.`,
    primaryButtonText: 'Watch Now',
    secondaryButtonText: 'Learn More',
  };



  const galleryProps = {
    images: [
      'https://raw.githubusercontent.com/mrspecht/media/main/img/the-matrix.jpg',
      'https://raw.githubusercontent.com/mrspecht/media/main/img/west-side-story.jpg',
      'https://raw.githubusercontent.com/mrspecht/media/main/img/no-time-to-die.jpg',
      'https://raw.githubusercontent.com/mrspecht/media/main/img/jurassic-park.jpg',
    
    ],
  };


  return (
    <body>
      <Header title="MovieFlix" />
    <main>
      <Banner {...bannerProps}>
        <div className="button-container">
          <Button buttonStyle="primary" buttonText={bannerProps.primaryButtonText} />
          <Button buttonStyle="secondary" buttonText={bannerProps.secondaryButtonText} />
        </div>
      </Banner>
      <Gallery {...galleryProps} />
    </main>
    <Footer />
    </body>
  );
}

export default App;
