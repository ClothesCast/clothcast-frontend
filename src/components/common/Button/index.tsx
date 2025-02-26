import styled from "styled-components";

const Button = styled.button`
  background-color: #4a90e2;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ac9;
  }
`;

export default Button;