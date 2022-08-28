import React, { useState } from "react";
import {
  InfoPopupContainer,
  ShadowBackground,
  ClosePopupBtnContainer,
  ClosePopupBtn,
  TitleHeader,
  FilmsList,
  FilmName,
} from "./InfoAboutCharacters.styles";

const InfoAboutCharacters = (props) => {
  return (
    <ShadowBackground>
      <InfoPopupContainer>
        <ClosePopupBtnContainer>
          <ClosePopupBtn
            className="fa-solid fa-circle-xmark"
            onClick={props.handleClose}
          ></ClosePopupBtn>
        </ClosePopupBtnContainer>
        <TitleHeader>FILMS:</TitleHeader>
        <FilmsList>
          <FilmName>1</FilmName>
          <FilmName>2</FilmName>
          <FilmName>3</FilmName>
        </FilmsList>
      </InfoPopupContainer>
    </ShadowBackground>
  );
};

export default InfoAboutCharacters;
