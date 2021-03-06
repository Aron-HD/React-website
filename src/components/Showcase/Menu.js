import styled from "styled-components";
import { Link } from "react-router-dom";
import Social from "../Social";

const StyledMenu = styled.div`
  all: revert;
  display: grid;
  /* flex-flow: column nowrap; */
  grid-template-rows: 1 1fr;
  grid-template-columns: 1 1fr;
  align-items: center;
  justify-content: left;
  background-color: #0d2538;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translate(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 15vw;
  padding: 40px;
  transition: transform 0.3s ease-in-out;

  ul {
    display: grid
    justify-items: center;
    align-content: center;
    justify-content: left;
    align-items: left;
    list-style: none;
    li {
      padding: 18px 10px;
      /* color: #fff; */
      a {
        transition: 0.2s;
        color: #fff;
      }
      a:hover {
        color: #f1356d;
        letter-spacing: 1px;
        transition: 0.2s;
      }
    }
  }

  @media (max-width: 768px) {
    width: 35vw;
    padding-left: 20px;
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/create">New blog</Link>
        </li>
      </ul>
      <Social />
    </StyledMenu>
  );
};

export default Menu;
