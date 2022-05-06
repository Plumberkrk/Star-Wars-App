import React, {useState, useEffect} from 'react'
import { ErrorMessage } from '../StyledComponents/StyledComponents'
import { CharactersList, LikeBtn, CharacterName, EveryItemList, PageButton, PageNumberCounter, FooterPage, SearchBar, SearchInput } from './Page.styles'
import axios from 'axios'

const Page = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [nextToken, setNextToken] = useState(null)
  const [previousToken, setPreviousToken] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [searchInputValue, setSearchInputValue] = useState('')
  const [searchingItem, setSearchingItem] = useState(`https://swapi.dev/api/people/?search=${searchInputValue}`)
  
  const fetchData = async (token = null) => {
    const page = token == null ? 'https://swapi.dev/api/people/' : token
  
    try {
      const res = await axios.get(page)
      const newPageNumber = page.split('=')[1] || 1
      setNextToken(res.data.next)
      setPreviousToken(res.data.previous)
      setPageNumber(newPageNumber)
      setData(res.data.results)
    } catch (e) {
      setError(`Sorry, we couldn't load characters for you`)
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

 return (
    <CharactersList> 
      <SearchBar>
          <PageButton><i className="fa-solid fa-magnifying-glass"></i></PageButton>
          <SearchInput type='text' placeholder='Search...' onChange={event => {setSearchInputValue(event.target.value)}} />
      </SearchBar>
      <ul>
        { data.length > 0 ? (
            <>
            {data.filter((item) => {
              if (searchInputValue == ''){
                return item
              } else if ( item.name.toLowerCase().includes(searchInputValue.toLowerCase())) {
                return item
              }
            }).map(item => (
            <EveryItemList className="itemContainer" key={item.name}>
            
                  <LikeBtn className="fa-solid fa-heart"></LikeBtn>
                  
                  <CharacterName className="title">{item.name}</CharacterName>
                
              </EveryItemList>
            ))} 
          </>
          ) : ( <ErrorMessage>{error ? error : 'Loading...'}</ErrorMessage>)
          }
      </ul>
      <FooterPage>
          <PageButton onClick={() => fetchData(previousToken)} disabled={previousToken == null}><i className="fa-solid fa-angle-left"></i></PageButton>
          <PageNumberCounter>{pageNumber}</PageNumberCounter>
          <PageButton  onClick={() => fetchData(nextToken)} disabled={nextToken == null}><i className="fa-solid fa-angle-right"></i></PageButton>
          {/* <PageButton onClick={() => setPageNumber(9)}><i className="fa-solid fa-angles-right"></i></PageButton> */}
      </FooterPage>
    </CharactersList>
 )
}
export default Page