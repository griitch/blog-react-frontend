import styled from "styled-components";

const BlogListItem = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  line-height: 2;

  & a {
    text-decoration: none;
    color: inherit;
    font-size: 1.75rem;
    font-weight: 700;
  }
  & a:hover {
    text-decoration: underline;
    color: #383737;
  }

  & h4 {
    color: #383737;
  }
`;

export default BlogListItem;
