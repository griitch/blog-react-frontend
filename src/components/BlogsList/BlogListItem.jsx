import styled from "styled-components";

const BlogListItem = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  line-height: 2;

  & a {
    text-decoration: none;
    color: ${(props) => props.theme.dark};
    font-size: 1.75rem;
    font-weight: 700;
  }
  & a:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.primary};
  }

  & h4 {
    color: ${(props) => props.theme.light};
  }
`;

export default BlogListItem;
