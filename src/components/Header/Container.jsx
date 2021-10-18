import styled from "styled-components";

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    padding: 1rem 1rem;
  }
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 3.5rem;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};

  & h1 {
    transition: all 200ms;
  }

  & h1:hover {
    text-decoration: underline;
    text-underline-offset: 1.5rem;
    color: ${(props) => props.theme.light};
  }
`;

export default Container;
