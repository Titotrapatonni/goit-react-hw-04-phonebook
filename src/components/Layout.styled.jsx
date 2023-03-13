import styled from 'styled-components';

export const Layout = styled.div`
  width: 800px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  padding: 32px;
  margin: 40px auto;
  border: outset;
  border-radius: 8px;
  background-color: #d9d9d9bc;
`;

export const HeroTitle = styled.h1`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 32px;
  margin: 0;
`;

export const Title = styled.h2`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 24px;
  margin: 0;
`;
