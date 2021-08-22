import link from "../assets/img/link.png";
import git from "../assets/img/git.png";

const Contact = () => {
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
      <form>
        <label htmlFor="name">Nom</label>
        <input type="text" name="" id="" />
        <label htmlFor="name">Message</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
    </div>
  );
};

export default Contact;
