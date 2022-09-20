import { Search } from 'components'
import React from 'react'
import { Content, ContentWrapper, SearchLabel } from './Home.css'

const Home = () => {
  return (
    <ContentWrapper>
        <Content>
            <SearchLabel>Search For Your Favourite Dog...</SearchLabel>
            <Search />
        </Content>
    </ContentWrapper>
  )
}

export default Home