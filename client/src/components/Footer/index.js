import React from 'react'
import styled from 'styled-components'

export default function Footer () {
  const Footer = styled.div`
    text-align: center;
    border-radius: 20px;
    padding: 1%;
    margin-top: 5%;
  `

  Footer.displayName = 'Footer'

  return (
    <Footer>
      <p>Powered by React, Node.js and the github API</p>
    </Footer>
  )
}
