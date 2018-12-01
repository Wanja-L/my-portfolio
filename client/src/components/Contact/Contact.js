import React, { Component } from 'react'
import '../App.css'

class Contact extends Component {
  render () {
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
        <br />
      </div>
    )
  }
}

export default Contact
