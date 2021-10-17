import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 3.5rem;
  background-color: palegoldenrod;

  & a {
    text-decoration: none;
    color: inherit;
  }

  & h1 {
    transition: all 200ms;
  }

  & h1:hover {
    text-decoration: underline;
    text-underline-offset: 1.5rem;
    color: red;
  }
`;

export default Container;
