import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
// import emailjs from '@emailjs/browser';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");

    /* Uncomment below if you want to enable the emailJS */

    // if (name !== '' && email !== '' && message !== '') {
    //   var templateParams = {
    //     name: name,
    //     email: email,
    //     message: message
    //   };

    //   console.log(templateParams);
    //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // }
  };

  const ContactBox = () => (
    <Box
      ref={form}
      component="form"
      noValidate
      autoComplete="off"
      className="contact-form"
    >
      <div className="form-flex">
        <TextField
          required
          id="outlined-required"
          label="Your Name"
          placeholder="What's your name?"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          error={nameError}
          helperText={nameError ? "Please enter your name" : ""}
        />
        <TextField
          required
          id="outlined-required"
          label="Email / Phone"
          placeholder="How can I reach you?"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          error={emailError}
          helperText={
            emailError ? "Please enter your email or phone number" : ""
          }
        />
      </div>
      <TextField
        required
        id="outlined-multiline-static"
        label="Message"
        placeholder="Send me any inquiries or questions"
        multiline
        rows={10}
        className="body-form"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        error={messageError}
        helperText={messageError ? "Please enter the message" : ""}
      />
      <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
        Send
      </Button>
    </Box>
  );

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            If you have any questions or inquiries, please don't hesitate to
            reach out to me.
          </p>

          {/* Contact buttons */}
          <div className="contact-buttons">
            <a href="mailto:fazamuhammad28@gmail.com" className="contact-button email">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>fazamuhammad28@gmail.com</span>
            </a>

            <a href="http://wa.me/6282142322939" target="_blank" rel="noopener noreferrer" className="contact-button whatsapp">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>+62 821-4232-2939</span>
            </a>

            <a href="http://linkedin.com/in/mfaza/" target="_blank" rel="noopener noreferrer" className="contact-button linkedin">
                <FontAwesomeIcon icon={faLinkedin} />
                <span>mfaza</span>
            </a>
          </div>
          {/* End: Added contact buttons */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
