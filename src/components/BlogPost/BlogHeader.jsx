import styled from "styled-components";

const BlogHeader = styled.h1`
  @media only screen and (max-width: 600px) {
    font-size: 2.25rem;
  }
  font-size: 3rem;
  text-align: center;
  margin: 2rem 0;
  color: ${(props) => props.theme.primary};
`;

export default BlogHeader;
