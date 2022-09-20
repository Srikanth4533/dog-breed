import styled from "styled-components";
import { Search } from '@styled-icons/evaicons-solid/Search'


export const InputContainer = styled.div`
  /* width: 500px; */
  position: relative;
  width: 90%;
  display: flex;
  background: ${props => props.theme.tertiary};
  border-radius: 10px;
  padding-block: 4px;
  padding-inline: 12px;

  @media (min-width:768px) {
    width:600px;
  }
`

export const Input = styled.input`
  width: 100%;
  border: none;
  background: ${props => props.theme.tertiary};
  padding-left: 12px;
  color: ${props => props.theme.mainFont};
  font-size: 1.2rem;

  ::placeholder {
    font-size: 1rem;
    color: ${props => props.theme.mainFont};
  }
  &:focus {
    outline: none;
  }
`

export const SearchIcon = styled(Search)`

`

export const SearchResultContainer = styled.div`
  position: absolute;
  /* overflow-y: scroll; */
  width: 100%;
  left: 0;
  margin-top: 45px;
`

export const ImgContainer = styled.div`
  display: flex;
  margin-bottom: 4px;
  border-radius: 4px;
  width: 100%;
  background: ${props => props.theme.tertiary};
`
export const Img = styled.img`
  width: 80px;
  height: 60px;
  border-radius: 2px;
`

export const Name = styled.h2`
  font-size: 14px;
  color: ${props => props.theme.mainFont};
  font-weight: 400;
  margin-left: 8px;
  margin-top: 4px;
`