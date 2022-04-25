import styled from 'styled-components';

export const Main = styled.main`
  text-align: center;
  margin-top: 5%;
  margin-bottom: 2%;
`
export const Navigation = styled.div`
    width: 30%;
    text-align: center;
    margin: 0 auto;
    border-bottom: 2px solid grey;
    display: flex;
    flex-direction: row;
`

export const NamePages = styled.a `
  padding: 0 10px;
  margin-left: 72px; 
  text-decoration: none;
  color: inherit;
  :focus {
    border-bottom: 3px solid blue;
  }
  :active {
    border-bottom: 3px solid blue;
  }
  :hover {
    border-bottom: 3px solid blue;
    opacity: 0.7;
  }
`