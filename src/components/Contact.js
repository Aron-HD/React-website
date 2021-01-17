import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <ul type="none">
        <li>
          <a href="mailto:aronhdavidson@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
            aronhdavidson@gmail.com
          </a>
        </li>
        <li>
          <a href="https://github.com/aron-hd">
            <FontAwesomeIcon icon={faGithub} />
            Github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/aron-hd/">
            <FontAwesomeIcon icon={faLinkedinIn} />
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
