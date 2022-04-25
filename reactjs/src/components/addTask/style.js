import styled from 'styled-components';

export const Input = styled.input`
  margin: 1%;
  padding: 0.8%;
  width: 250px;
  text-align: left;
  border-radius: 10px;
`
export const Button = styled.button`
  padding: 1%;
  background: #4545ff;
  color: white;
  width: 80px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  :hover{
    opacity: 0.7;
  }
  :disabled {
    background-color: grey;
  }
`