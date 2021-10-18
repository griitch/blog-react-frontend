import styled from "styled-components";

const Form = styled.form`
  @media only screen and (max-width: 600px) {
    width: 95%;
    margin: 4rem auto;
    & input {
      width: 50%;
    }
  }
  width: 60%;
  margin: 3rem auto;

  & div {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
  }

  & input {
    width: 70%;
    padding: 0 1rem;
    line-height: 2rem;
  }
`;

export default Form;
