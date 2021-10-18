import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.25rem;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.secondary};
  margin: auto;
  display: block;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.dark};
  }
`;

export default StyledButton;
