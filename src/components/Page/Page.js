import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { ErrorMessage } from "../StyledComponents/StyledComponents";
import {
  CharactersList,
  LikeBtn,
  CharacterName,
  EveryItemList,
  PageButton,
  PageNumberCounter,
  FooterPage,
  SearchBar,
  SearchInput,
  AllCharactersList,
} from "./Page.styles";
import axios from "axios";

const Page = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [nextToken, setNextToken] = useState(null);
  const [previousToken, setPreviousToken] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchInputValue, setSearchInputValue] = useState("");

  const fetchData = async (token = null) => {
    let page;
    const currentPage = "https://swapi.dev/api/people/";
    // const page = token == null ? currentPage : token

    // const inputValue = `https://swapi.dev/api/people/?search=${searchInputValue}`

    // const test = searchInputValue != '' ? inputValue : 'https://swapi.dev/api/people/'
    if (searchInputValue != "") {
      page = `https://swapi.dev/api/people/?search=${searchInputValue}`;
    } else if (token == null) {
      page = currentPage;
    } else if (token != null) {
      page = token;
    }
    let newPageNumber = page.split("=")[1] || 1;
    // console.log({test});

    // console.log({token});
    // console.log({searchInputValue});
    // console.log(inputValue);
    try {
      const res = await axios.get(page);

      setNextToken(res.data.next);
      setPreviousToken(res.data.previous);
      setPageNumber(newPageNumber);
      setData(res.data.results);
      console.log({ page });
    } catch (e) {
      setError(`Sorry, we couldn't load characters for you`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CharactersList>
      <SearchBar>
        <PageButton
          onClick={() => {
            document.getElementById("dupa").value = "";
            setSearchInputValue("");
            fetchData("https://swapi.dev/api/people/");
          }}
        >
          dupa
        </PageButton>
        <PageButton onClick={() => fetchData()}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </PageButton>
        <SearchInput
          id="dupa"
          type="text"
          onfocus="value=''"
          placeholder="Search..."
          onChange={(event) => {
            setSearchInputValue(event.target.value);
          }}
        />
      </SearchBar>
      <AllCharactersList>
        {data.length > 0 ? (
          <>
            {data.map((item) => (
              <EveryItemList className="itemContainer" key={item.name}>
                <LikeBtn className="fa-solid fa-heart"></LikeBtn>

                <CharacterName className="title">{item.name}</CharacterName>
              </EveryItemList>
            ))}
          </>
        ) : (
          <ErrorMessage>{error ? error : "Loading..."}</ErrorMessage>
        )}
      </AllCharactersList>
      <FooterPage>
        <PageButton
          onClick={() => fetchData(previousToken)}
          disabled={previousToken == null}
        >
          <i className="fa-solid fa-angle-left"></i>
        </PageButton>
        <PageNumberCounter>{pageNumber}</PageNumberCounter>
        <PageButton
          onClick={() => fetchData(nextToken)}
          disabled={nextToken == null}
        >
          <i className="fa-solid fa-angle-right"></i>
        </PageButton>
        {/* <PageButton onClick={() => setPageNumber(9)}><i className="fa-solid fa-angles-right"></i></PageButton> */}
      </FooterPage>
    </CharactersList>
  );
};
export default Page;
