import styled from "styled-components";

const NavbarStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;

  p {
    font-size: 13px;
    line-height: 1.3;
    font-weight: 400;
    color: var(--text-color);
    :hover {
      transition: 0.5s;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  svg {
    width: 24px;
    height: 24px;
    fill: var(--text-color);
  }
  .name {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    aspect-ratio: 1/1;
    border-radius: 100%;
    background-color: #9ee5e5;
    padding: 5px;
  }
`;
export default NavbarStyle;
