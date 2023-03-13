import { Field } from 'formik';
import styled from 'styled-components';

export const Button = styled.button`
  width: 160px;
  font-size: 16px;
  padding: 8px 16px;

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

export const Input = styled(Field)`
  width: 600px;
  display: flex;
  justify-content: space-around;
  gap: 32px;
  padding: 8px 16px;
  margin: 8px 0;
  border: groove;
  border-radius: 8px;
  background-color: #f7f7f7c5;
`;
