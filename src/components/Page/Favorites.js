import React, { useState } from "react";
import {
  CharactersList,
  LikeBtn,
  CharacterName,
  EveryItemList,
  AllCharactersList,
} from "./Page.styles";
import {
  ErrorMessage,
  ErrorContainer,
} from "../StyledComponents/StyledComponents";

const Favorites = () => {
  const [arr, setArr] = useState(
    JSON.parse(localStorage.getItem("characterArr"))
  );

  const handleOnLikeClick = (item) => {
    const indexToDelete = arr.indexOf(item);
    arr.splice(indexToDelete, 1);

    localStorage.setItem("characterArr", JSON.stringify(arr));

    setArr(JSON.parse(localStorage.getItem("characterArr")));
  };

  return (
    <CharactersList>
      <AllCharactersList>
        {arr.length > 0 ? (
          arr.map((itemFullName) => (
            <EveryItemList key={itemFullName}>
              <LikeBtn
                className="fa-solid fa-heart dupa"
                onClick={() => {
                  handleOnLikeClick(itemFullName);
                }}
              ></LikeBtn>
              <CharacterName>{itemFullName}</CharacterName>
            </EveryItemList>
          ))
        ) : (
          <ErrorContainer>
            <ErrorMessage>
              Looks like you don't have favorites characters
            </ErrorMessage>
          </ErrorContainer>
        )}
      </AllCharactersList>
    </CharactersList>
  );
};

export default Favorites;
