import styled from "styled-components";

const SearchStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  margin: 120px 20px;
  span {
    color: var(--text-color);
  }
`;
const Logo = styled.div`
  svg {
    max-width: 270px;
    height: auto;
    filter: brightness(var(--brightness));
  }
`;
const SearchBar = styled.input`
  background-color: var(--bg-color);
  font-family: inherit;
  font-size: inherit;
  width: 100%;
  max-width: 560px;
  height: 50px;
  position: relative;
  border: 1px solid var(--text-color);
  padding: 0 45px;
  border-radius: 20px;
  color: var(--text-color);
  :focus {
    opacity: 0.8;
    outline: none;
    border: 1px solid var(--text-color);
    /* box-shadow: 0 0 10px #4d4d4e; */
  }
`;
const Button = styled.div`
  padding: 10px;
  width: 60px;
  height: auto;
  background-color: var(--text-color);
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  .switch {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: var(--bg-color);
    position: inherit;
    transform: translateX(0);
    transition: 0.3s ease;
  }
  .switch.change {
    transform: translateX(40px);
    transition: 0.3s ease;
  }
`;

export { SearchStyle, Logo, SearchBar, Button };
