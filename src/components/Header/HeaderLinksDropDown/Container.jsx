import styled from "styled-components";

const HeaderLinksDropDown = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: 1rem;
  right: 1rem;

  & svg {
    align-self: center;
    fill: ${(props) => props.theme.secondary};
  }

  & li {
    background-color: ${(props) => props.theme.primary};
    padding: 1rem;
  }
`;
export default HeaderLinksDropDown;
