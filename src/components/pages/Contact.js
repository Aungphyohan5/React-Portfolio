import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


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
        console.log
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
