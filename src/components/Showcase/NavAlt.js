import { Link } from "react-router-dom";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: inherit;
  height: 55px;
  border-bottom: 1px solid #f1f1f1;
  margin: 40px;
  //   padding-top: 40px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

const NavAlt = () => {
  return (
    <Nav>
      <div className="logo">
        <Link to="/">Aron Hayes Davidson</Link>
      </div>
      <Burger />
    </Nav>
  );
};

export default NavAlt;
