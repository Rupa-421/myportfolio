import React, { forwardRef, useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
// const handleSubmit = (e) => {
//   e.preventDefault();
// };

const Contact = forwardRef((props, ref) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qhjwejh", "template_s9ctl7n", form.current, {
        publicKey: "0FQGUs3FkyxP3kWzi",
      })
      .then(
        (result) => {
          console.log("SUCCESS!");
          console.log(result.text);
          alert("Mail sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <ContactContainer ref={ref}>
      <ContactHeader>Contact</ContactHeader>
      <ContactWrapper>
        <ContactForm>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </ContactForm>
      </ContactWrapper>
    </ContactContainer>
  );
});

const ContactHeader = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  font-family: "Raleway", sans-serif;
  color: #7d0669;
  margin: 3rem;
`;
const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContactContainer = styled.div`
  padding: 3rem;
  background-color: #f2c9ef;
`;
const ContactForm = styled.div`
  border: 1px solid black;
  padding: 30px;
  width: 400px;
  border-radius: 5px;
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      margin-bottom: 10px;
      &:focus {
        border: 2px solid rgba(0206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      margin-bottom: 10px;

      &:focus {
        border: 2px solid rgb(0, 206, 158, 1);
      }
    }
    input[type="submit"] {
  border-top: 1px solid #e597f7;
  background: #ce65d6;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#a621a4),
    to(#ce65d6)
  );
  background: -webkit-linear-gradient(top, #a621a4, #ce65d6);
  background: -moz-linear-gradient(top, #a621a4, #ce65d6);
  background: -ms-linear-gradient(top, #a621a4, #ce65d6);
  background: -o-linear-gradient(top, #a621a4, #ce65d6);
  padding: 8.5px 17px;
  -webkit-border-radius: 17px;
  -moz-border-radius: 17px;
  border-radius: 17px;
  -webkit-box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
  -moz-box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
  box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
  text-shadow: rgba(0, 0, 0, 0.4) 0 1px 0;
  color: white;
  font-size: 14px;
  cursor: pointer;
  font-family: Georgia, Serif;
  text-decoration: none;
  vertical-align: middle;
  &:hover {
    border-top-color: #692878;
    background: #692878;
    color: #ccc;
  }
  &:active {
    border-top-color: #581b5c;
    background: #581b5c;
  }

      
    }
  }
`;

export default Contact;
