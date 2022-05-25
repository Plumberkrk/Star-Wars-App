import styled from "styled-components";

export const CharactersList = styled.div`
    display: flex;  
    flex-direction: column;
    margin: auto;
    align-content: flex-end; 
    align-items:: flex-end;

    background-color: #29292a;
    color: white;
    width: 100vw;
    width: 500px;
    height: 510px;
    
    border-radius: 25px;
    
    @media (max-height: 600px) and (max-width: 600px){
        height: 100vh;
        width: 100vw;
        border-radius: 0;
    }
`;

export const LikeBtn = styled.i`
  cursor: pointer;
  transition: color 0.1s ease-in-out;

  :hover {
    color: #d06f6f;
  }
`;

export const CharacterName = styled.span`
  margin-left: 25px;
`;

export const EveryItemList = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 15px 0px;

  :last-child {
    margin: 0;
  }
`;

export const FooterPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 35px;
  height: 30px;
  margin-bottom: 10px;
`;

export const PageButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  background-color: #29292a;
  color: white;

  :hover {
    opacity: 0.6;
  }

  :disabled {
    cursor: default;
    opacity: 0;
  }
`;

export const PageNumberCounter = styled.p`
  font-size: 20px;
  text-align: center;
`;
export const SearchBar = styled.div`
  display: flex;
  margin: 25px 30px 0;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 70px;
  padding-left: 5px;
  border-radius: 8px;
  border: none;
  outline: 0;
  transition: opacity 0.1s ease-in-out;
  transition: flex-grow 0.4s ease-in-out;

  :focus {
    flex-grow: 0.8;
  }

  :hover {
    opacity: 0.8;
  }

  @media (max-height: 600px) and (max-width: 600px) {
    flex-grow: 0.8;
  }
`;

export const AllCharactersList = styled.ul`
  height: 90%;
`;
