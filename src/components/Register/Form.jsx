import styled from "styled-components";

const Form = styled.form`
  width: 60%;
  margin: 3rem auto;

  & div {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
  }

  & input {
    width: 70%;
    padding: 0 0.5rem;
    line-height: 2rem;
  }
  @media only screen and (max-width: 600px) {
    width: 95%;
    padding-right: 10px;
    margin: 4rem auto;
    & input {
      width: 55%;
    }
  }
`;

export default Form;
