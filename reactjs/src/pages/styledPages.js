import styled from 'styled-components';

export const TrashIMG = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`
export const DivAll = styled.div`
  width: 40%;
  margin: auto;
  align-items: left;
  display: flex;
  flex-direction: row;
  justify-content: left;
`

export const SpaceInput = styled.input`
  margin: auto 5%;
`

export const DivCompleted = styled.div`
  width: 50%;
  margin: 0 17%;
  align-items: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const TrashIMGAll = styled.img`
  width: 20px;
  height: 20px;
`

export const DeleteAll = styled.div`
  cursor: pointer;
  width: 120px;
  height: 30px;
  margin: 3% 60%;
  background-color: #ec3838;
  color: white;
  padding: 0.5% 1%;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  :hover{
    opacity: 0.7;
  }
`