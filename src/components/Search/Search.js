import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { filterResult, keyGen } from 'utils'
import { 
  Img, 
  ImgContainer, 
  Input, 
  InputContainer, 
  Name, 
  SearchIcon, 
  SearchResultContainer 
} from './Search.css'

const Search = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const handleInput = (e) => {
        setValue(e.target.value)
      //   let filter = filterResult(data, value)
      //  if(value.length > 4) {
      //   setData(filter)
      //  }
      //  console.log(filter)
  }

 
  

  useEffect(() => {
    const getData = async() => {
      try {
        setLoading(true)
        const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${value}`)
        console.log(data)
        setData(data)
        setLoading(false)
      } catch (error) {
        console.log(error.message)
        setLoading(false)
      }
    }
    // if(value.length > 4) return
    if(value.length > 3) {
      getData()
    } 
  }, [value])
  return (
    <InputContainer>
      <SearchIcon size="2rem" />
      <Input 
        value={value}
        onChange={handleInput}
        placeholder='Search...'
      />
      <SearchResultContainer>
        {loading && <div>Loading...</div>}
        {!loading && 
        data.length > 0 && 
        data?.map((result) => {
          const imgSrc = 
                result && 
                result.reference_image_id && 
                `https://cdn2.thedogapi.com/images/${result.reference_image_id}.jpg`

          return (
            <ImgContainer
              key={keyGen()}
            >
              <Img 
                src={imgSrc}
              />
              <Name>{result.name}</Name>
            </ImgContainer>
          )
        })}
      </SearchResultContainer>
    </InputContainer>
  )
}

export default Search