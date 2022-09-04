import React, { useState, useEffect } from "react";
import cx from "classnames";
// import { debounce } from "debounce";
import {
  ErrorMessage,
  ErrorContainer,
} from "../StyledComponents/StyledComponents";
import {
  CharactersList,
  LikeBtn,
  LikeBtnActive,
  CharacterName,
  EveryItemList,
  PageButton,
  PageNumberCounter,
  FooterPage,
  SearchBar,
  SearchInput,
  AllCharactersList,
} from "./Page.styles";
import InfoAboutCharacters from "./InfoAboutCharacters";
import LoadingSpinner from "./LoadingSpinner";
import axios from "axios";
import "./styles.css";

const debounce = (cb, delay = 1000) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const Page = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [nextToken, setNextToken] = useState(null);
  const [previousToken, setPreviousToken] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [kupa, setKupa] = useState(false);

  const togglePopup = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  const handleOnLikeClick = (item) => {
    const currentClickedCharacter = item.name;
    const existedArr = JSON.parse(localStorage.getItem("characterArr"));

    if (existedArr == null) {
      localStorage.setItem("characterArr", "[]");
    }

    const oldCharacterArr = JSON.parse(localStorage.getItem("characterArr"));

    if (oldCharacterArr.includes(currentClickedCharacter)) {
      return null;
    } else {
      oldCharacterArr.push(currentClickedCharacter);
    }

    console.log(oldCharacterArr);

    localStorage.setItem("characterArr", JSON.stringify(oldCharacterArr));
  };

  const showInfAboutCharacter = (i) => {
    i = i.films;
    // i.films.map((a) => {console.log(a);})
    console.log(i);
    axios.get("https://swapi.dev/api/films").then((response) => {
      console.log(response);
    });
  };

  const favoriteCX = cx("fa-solid fa-heart");

  const opuznienieFunkcji = debounce(() => {
    setIsLoading(false);
  }, 0);

  const opuznienieFunkcjiData = debounce((token) => {
    fetchData(token);
  }, 0);

  const fetchData = async (token = null) => {
    let page;
    let newPageNumber;
    const currentPage = "https://swapi.dev/api/people/";

    if (searchInputValue !== "") {
      page = `https://swapi.dev/api/people/?search=${searchInputValue}&page=1`;
    } else if (token == null) {
      page = currentPage;
    } else if (token != null) {
      page = token;
    }

    newPageNumber = page.split("e=")[1] || 1;

    try {
      const responseFromAPI = await axios.get(page).then((res) => {
        setNextToken(res.data.next);
        setPreviousToken(res.data.previous);
        setPageNumber(newPageNumber);
        setData(res.data.results);
      });

      setIsLoading(true);
    } catch (e) {
      setError(`Sorry, we couldn't load characters for you`);
    }
  };

  const dupa = () => {
    setKupa(!kupa);
  };

  useEffect(() => {
    fetchData();
    dupa();
  }, []);

  console.log(JSON.parse(localStorage.getItem("characterArr")));

  return (
    <CharactersList>
      {isInfoOpen ? <InfoAboutCharacters handleClose={togglePopup} /> : null}
      <SearchBar>
        <PageButton
          onClick={() => {
            document.getElementById("searchInput").value = "";
            setSearchInputValue("");
            setError("");
            fetchData(null);
          }}
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </PageButton>
        <PageButton
          onClick={() => {
            if (searchInputValue !== "" && data.length === 0) {
              setError("No results found");
              console.log(error);
            }
            fetchData();
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </PageButton>
        <SearchInput
          id="searchInput"
          type="text"
          onfocus="value=''"
          placeholder="Search..."
          onChange={(event) => {
            setSearchInputValue(event.target.value);
          }}
        />
      </SearchBar>
      {isLoading ? (
        <AllCharactersList>
          {data.length > 0 ? (
            <>
              {data.map((item) => (
                <EveryItemList className="itemContainer" key={item.name}>
                  {JSON.parse(localStorage.getItem("characterArr")).includes(
                    item.name
                  ) ? (
                    <LikeBtnActive
                      onClick={() => {
                        handleOnLikeClick(item);
                        dupa();
                      }}
                      className={favoriteCX}
                    ></LikeBtnActive>
                  ) : (
                    <LikeBtn
                      onClick={() => {
                        handleOnLikeClick(item);
                        dupa();
                      }}
                      className={favoriteCX}
                    ></LikeBtn>
                  )}

                  <CharacterName
                    className="title"
                    onClick={() => {
                      showInfAboutCharacter(item);
                      togglePopup();
                    }}
                  >
                    {item.name}
                  </CharacterName>
                </EveryItemList>
              ))}
            </>
          ) : (
            <ErrorContainer>
              <ErrorMessage>
                {searchInputValue !== "" ? error : <LoadingSpinner />}
              </ErrorMessage>
            </ErrorContainer>
          )}
        </AllCharactersList>
      ) : (
        <LoadingSpinner />
      )}
      <FooterPage>
        <PageButton
          onClick={() => {
            opuznienieFunkcji();
            opuznienieFunkcjiData(previousToken);
          }}
          disabled={previousToken == null || !{ isLoading }}
        >
          <i className="fa-solid fa-angle-left"></i>
        </PageButton>
        {data.length === 0 ? null : (
          <PageNumberCounter>{pageNumber}</PageNumberCounter>
        )}
        <PageButton
          onClick={() => {
            opuznienieFunkcji();
            opuznienieFunkcjiData(nextToken);
          }}
          disabled={nextToken == null || !{ isLoading }}
        >
          <i className="fa-solid fa-angle-right"></i>
        </PageButton>
      </FooterPage>
    </CharactersList>
  );
};
export default Page;
