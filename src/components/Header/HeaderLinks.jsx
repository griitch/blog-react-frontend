import styled from "styled-components";

const HeaderLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;

  & li a {
    padding: 0 2rem;
    font-size: 1.5rem;
  }

  & li a:hover {
    color: darkblue;
  }
`;
export default HeaderLinks;
