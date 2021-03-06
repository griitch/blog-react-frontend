import styled from "styled-components";

const HeaderLinksList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    & li a {
      padding: 0 1rem;
      font-size: 1rem;
    }
  }
  & li a {
    padding: 0 2rem;
    font-size: 1.5rem;
  }

  & li a:hover {
    color: ${(props) => props.theme.light};
  }
`;
export default HeaderLinksList;
