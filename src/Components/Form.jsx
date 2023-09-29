import './Form.css'
import React from 'react'

const Form = () => {
  return (
    <div className='form'>
      <form action="">
        <label htmlFor="name">Your Name</label>
        <input type="text" />
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="subject">Subject</label>
        <input type="text" />
        <label htmlFor="message">Message</label>
       <textarea name="message" id="message" cols="30" rows="6" placeholder='Type your message here'></textarea>
       <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form
