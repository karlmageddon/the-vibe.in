import React from 'react'
import posed from 'react-pose';

import Player from './audioplayers/Player'
import CityChooser from './CityChooser'
import Footer from './Footer'

import LA from './images/los_angeles.jpg'
import SF from './images/san_francisco.jpg'
import NY from './images/new_york.jpg'
import SEA from './images/seattle.jpg'
import PDX from './images/portland.jpg'

const bgImages = {
  los_angeles: LA,
  san_francisco: SF,
  new_york: NY,
  seattle: SEA,
  portland: PDX
}

const Container = posed.div({
  enter: { staggerChildren: 100 }
});

const P = posed.h1({
  enter: { x: 0, opacity: 1, delay: 200, transition: { duration: 800, decay: true } },
  exit: { x: -200, opacity: 0, transition: { duration: 800, decay: true } }
});

const U = posed.div({
  enter: { y: 0, opacity: 1, transition: { duration: 1200, decay: true } },
  exit: { y: 100, opacity: 0, transition: { duration: 800, decay: true } }
})

class City extends React.Component {

  render() {
    if (!this.props.city) {
      document.title = 'catch a vibe'
      return <CityChooser />
    }

    document.title = `the vibe in ${this.props.city}`.replace('_',' ')

    return (
      <React.Fragment>
      <img alt="the city" className='cityimage' src={bgImages[this.props.city]} />
      <Container className='title'>
        <P className='maintext'>the-vibe.in/{this.props.city.toUpperCase()}</P>
        <U>
        <Player city={this.props.city} />
        </U>

      </Container>
      <Footer />
      </React.Fragment>
    );
  }
}


export default City
