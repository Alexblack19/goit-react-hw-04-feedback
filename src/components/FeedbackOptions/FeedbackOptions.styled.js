import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  width: 90px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-transform: capitalize;
  cursor: pointer;
  background-color: #e6d7cc;
  &:hover {
    background-color: #dbc5b6;
    font-weight: 600;
  }
  transition: background-color 1500ms cubic-bezier(0.4, 0, 0.2, 1),
    font-weight 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;
