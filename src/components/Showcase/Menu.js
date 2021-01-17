import styled from "styled-components";

const StyledMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row-nowrap;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translate(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 40vw;
    padding: 40px;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <li>
        <a href="/projects">Projects</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        <a href="/blogs">Blogs</a>
      </li>
    </StyledMenu>
  );
};

export default Menu;
