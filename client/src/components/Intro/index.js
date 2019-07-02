import React from 'react'
import styled from 'styled-components'
import portrait from '../../portrait.jpg'

export default function Intro () {
  const Intro = styled.div`
    text-align: center;
    border-color: rgba(0, 0, 0, 0.5);
    border-width: 4px;
    border-style: solid;
    border-radius: 15px;
    padding: 2%;
    margin-top: 2%;
  `

  Intro.displayName = 'Intro'

  return (
    <Intro>
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
        I am a Swiss raised Kiwi, rock climber and all about living life on two
        wheels.
      </p>
      <br />
    </Intro>
  )
}
