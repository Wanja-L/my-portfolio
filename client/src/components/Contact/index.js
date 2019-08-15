import React from 'react'
import styled from 'styled-components'

export default function Contact () {
  const Contact = styled.div`
    text-align: center;
    background-color: #f3c677;
    border-width: 4px;
    border-radius: 15px;
    padding: 2%;
    margin-top: 2%;
  `

  Contact.displayName = 'Contact'

  return (
    <Contact>
      <h3>Contact Info</h3>
      <p>
        email:{' '}
        <a
          class='u-email'
          href='mailto:wanja.leuthold@gmail.com'
          style={{ color: 'rgb(50,50,80)' }}
        >
          wanja.leuthold@gmail.com
        </a>
      </p>

      <p>mobile: 0210418761</p>

      <a
        href='https://www.linkedin.com/in/wanja-leuthold/'
        style={{ color: 'rgb(50,50,80)' }}
      >
        LinkedIn
      </a>

      <br />
    </Contact>
  )
}
