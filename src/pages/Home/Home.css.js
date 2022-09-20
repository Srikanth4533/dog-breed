import styled from "styled-components";


export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const SearchLabel = styled.h2`
  margin-bottom: 10px;
  font-size: 1rem;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`