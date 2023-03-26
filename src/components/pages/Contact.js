import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/Contact.css';


export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_zezn407',
      'template_qo7g4m8',
      form.current,
      't-dfFqeX4KEVQG46U')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='contact-bg vh-100 text-white'>
      <form ref={form} onSubmit={sendEmail} className='mx-auto col-10 col-md-8 col-lg-6 form-container'>
        <h1>Contact</h1>
        <div className='form-group mt-4'>
          <label>Name</label>
          <input type="text" name="user_name" className='form-control' />
        </div>

        <div className='form-group mt-4'>
          <label>Email</label>
          <input type="email" name="user_email" className='form-control' />
        </div>

        <div className='form-group mt-4'>
          <label>Message</label>
          <textarea name="message" className='form-control textbox-height' />
        </div>
        <input type="submit" value="Send" className='btn btn-warning mt-4' />
      </form>
    </div>

  );
}
