import React from 'react'
import '../App.css'

function Contact () {
  return (
    <div className='Section'>
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
    </div>
  )
}

export default Contact
