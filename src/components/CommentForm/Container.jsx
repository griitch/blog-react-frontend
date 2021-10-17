import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 1rem;

  & input {
    width: 80%;
    padding: 1rem;
    font-size: 1rem;
    outline: none;
  }
  & button {
    width: 20%;
    font-size: 1rem;
  }
`;
export default Container;
