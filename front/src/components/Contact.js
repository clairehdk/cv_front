import { useState } from "react";
import link from "../assets/img/link.png";
import git from "../assets/img/git.png";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const handleName = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleMail = (event) => {
    const value = event.target.value;
    setMail(value);
  };

  const handleMessage = (event) => {
    const value = event.target.value;
    setMessage(value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = {
        name,
        mail,
        message,
      };
      const response = axios.post("http://localhost:3000/form", data);
      console.log(response);
      // setSuccess(response);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div className="contact">
      <h1>Me contacter</h1>
      <div className="logos">
        <a href="https://www.linkedin.com/in/clairehdk" target="_blank">
          <img src={link} alt="linkedin" />
        </a>
        <a href="https://github.com/clairehdk" target="_blank">
          <img src={git} alt="Git Hub" />
        </a>
      </div>
      <p>{error}</p>
      <p>{success}</p>
      <form className="form">
        <input
          type="text"
          name="name"
          placeholder="Nom"
          onChange={handleName}
        />
        <input
          type="text"
          name="mail"
          placeholder="E-mail"
          onChange={handleMail}
        />
        <textarea
          name="message"
          cols="20"
          rows="5"
          placeholder="Votre message..."
          onChange={handleMessage}
        ></textarea>
        <input
          className="submit"
          onClick={handleSubmit}
          type="submit"
          value="Envoyer"
        />
      </form>
    </div>
  );
};

export default Contact;
