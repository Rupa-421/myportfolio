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
            <input type="text" name="user_name" placeholder="Enter your name" />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email ex:rupa@gmail.com"
            />
            <label>Message</label>
            <textarea name="message" placeholder="Type here..." />
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
  color: #173b6c;
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
  background-color: #dde7f2;
`;
const ContactForm = styled.div`

  box-shadow: rgb(79 151 198 / 67%) 0px 7px 14px 0px, rgb(0 0 0 / 12%) 0px 3px 6px 0px;
  padding: 30px;
  width: 400px;
  border-radius: 5px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif;
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
      margin-top: 10px;;+
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
      margin-top: 10px;

      &:focus {
        border: 2px solid rgb(0, 206, 158, 1);
      }
    }
    input[type="submit"] {
    border-top: 1px solid #3a5f7d;
  background: #497ba9;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#6a89cc),
    to(#497ba9)
  );
    box-shadow: 5px 13px 8px -10px rgb(79 151 198 / 67%);
border: transparent;
  background: -webkit-linear-gradient(top, #2057ce, #339DFF);
  background: -moz-linear-gradient(top, #6a89cc, #497ba9);
  background: -ms-linear-gradient(top, #6a89cc, #497ba9);
  background: -o-linear-gradient(top, #6a89cc, #497ba9);
  padding: 10px 20px;
  border-radius: 10px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px;
  -moz-box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 3px 6px;
  text-shadow: rgba(0, 0, 0, 0.1) 0 1px 0;
  color: white;
  font-size: 15px;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  text-decoration: none;
  vertical-align: middle;
  transition: all 0.3s ease;
}

input[type="submit"]:hover {
  background: white;
  // background: -webkit-gradient(
  //   linear,
  //   left top,
  //   left bottom,
  //   from(#4f6d92),
  //   to(#36597d)
  // );
  // background: -webkit-linear-gradient(top, #2057ce, #339DFF);
  // background: -moz-linear-gradient(top, #4f6d92, #36597d);
  // background: -ms-linear-gradient(top, #4f6d92, #36597d);
  // background: -o-linear-gradient(top, #4f6d92, #36597d);
  color: #339DFF;
}

input[type="submit"]:active {
  background: #339DFF;
}


}
      
    }
  }
`;

export default Contact;
