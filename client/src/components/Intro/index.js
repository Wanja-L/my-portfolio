import React from 'react'
import styled from 'styled-components'
import portrait from '../../portrait.jpg'

export default function Intro () {
  const Intro = styled.div`
    text-align: center;
    background-color: #f3c677;
    border-width: 4px;
    border-radius: 15px;
    padding: 2%;
    margin-top: 2%;
  `

  Intro.displayName = 'Intro'

  return (
    <Intro>
      <h1>Hi, my name is Wanja</h1>
      <img
        src={portrait}
        style={{ 'margin-top': '5%', 'border-radius': '15px' }}
        alt='Picture of Wanja'
        width='70%'
        height='70%'
      />
      <h2>
        I care about elegant, useful software and doing work that I can stand
        behind with awesome people.
      </h2>
      <p>
        I am a Kiwi raised in Switzerland, a rock climber and all about living
        life on two wheels.
      </p>
      <br />
    </Intro>
  )
}
