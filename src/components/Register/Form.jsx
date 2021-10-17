import styled from "styled-components";

const Form = styled.form`
  width: 50%;
  margin: 3rem auto;

  & div {
    display: flex;
    margin: 1rem 0;
  }
  & input {
    width: 80%;
    font-size: 1.5rem;
    padding: 0 1rem;
    line-height: 2rem;
  }
  & label {
    width: 20%;
  }
  & button {
    margin: auto;
    display: block;
    padding: 0.75rem 1.5rem;
    font-size: 1.2rem;
  }
`;

export default Form;
