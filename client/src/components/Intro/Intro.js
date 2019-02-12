import React from 'react'
import '../App.css'
import portrait from '../../portrait.jpg'

function Intro () {
  return (
    <div className='Section'>
      <img
        src={portrait}
        style={{ 'margin-top': '5%' }}
        alt='Picture of Wanja'
        width='70%'
        height='70%'
      />

      <h1>Hi, my name is Wanja</h1>
      <h2>I care about elegant, useful software.</h2>

      <p>
        I am a Swiss raised Kiwi, rock climber, and passionate about getting
        around on two wheels.
      </p>
      <br />
    </div>
  )
}

export default Intro
