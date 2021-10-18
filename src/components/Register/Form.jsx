import styled from "styled-components";

const Form = styled.form`
  @media only screen and (max-width: 600px) {
    width: 90%;
    margin: 4rem auto;
  }
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
`;

export default Form;
