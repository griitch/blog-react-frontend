import styled from "styled-components";

const Container = styled.div`
  @media only screen and (max-width: 600px) {
    width: 90%;
  }

  a {
    text-decoration: underline;
    color: ${(props) => props.theme.primary};
  }
  width: 50%;
  margin: 3rem auto;
  line-height: 1.8;
`;

export default Container;
