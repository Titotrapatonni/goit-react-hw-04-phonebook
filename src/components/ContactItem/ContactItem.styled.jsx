import styled from 'styled-components';

export const DeleteButton = styled.button`
  width: 80px;
  font-size: 16px;
  padding: 8px;
  margin-left: 32px;
  border: outset;
  border-radius: 8px;
  background-color: #f3f3f3ef;
  cursor: pointer;
  transition: background-color 250ms linear, border 200ms linear,
    color 50ms linear;
  &:hover {
    background-color: #d3d3d3cc;
  }
  &:active {
    border: inset;
    color: #f3f3f3;
    background-color: #75757597;
  }
`;
export const Item = styled.li`
  width: auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px inset #d3d3d3cc;
  background-color: #6f6f6f28;
  border-radius: 8px;
  gap: 8px;
`;

export const FullName = styled.p`
  font-weight: 600;
`;

export const Number = styled.span`
  margin-left: auto;
  font-weight: 600;
`;
