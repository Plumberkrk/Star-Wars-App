import styled from "styled-components";

export const ShadowBackground = styled.div`
  display: flex;
  position: fixed;
  background: #00000050;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  justify-content: center;
  align-items: center;
`;

export const InfoPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #29292a;
  height: 40%;
  width: 35%;
  border-radius: 20px;
`;

export const ClosePopupBtnContainer = styled.div`
  display: flex;
  width: 100%;
  height: 0;
  flex-direction: row-reverse;
`;

export const ClosePopupBtn = styled.i`
  cursor: pointer;
  font-size: 23px;
`;

export const TitleHeader = styled.div`
  margin-top: 20px;
  flex-grow: 1;
`;

export const FilmsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  flex-grow: 2;
  list-style-type: none;
`;

export const FilmName = styled.li`
  padding: 0;
`;
