import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const StyledSocial = styled.ul`
  display: inherit;
  list-style: none;
  li {
    padding: 18px 10px;
    a {
      margin-right: 20px;
      transform: scale(0.5);
      transition: 0.5s;
    }
    a:hover {
      transform: scale(0.5) translateY(-15px);
      color: #f1356d;
    }
  }

  /* @media (max-width: 1291px) {
     flex-flow: column nowrap; 
     ul {
    } 
  } */
`;

const Social = () => {
  return (
    <StyledSocial>
      <li>
        <a href="mailto:aronhdavidson@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </li>
      <li>
        <a href="https://github.com/aron-hd">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/aron-hd/">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
      </li>
    </StyledSocial>
  );
};

export default Social;
