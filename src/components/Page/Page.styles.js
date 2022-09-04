import styled from "styled-components";

export const CharactersList = styled.div`
    display: flex;  
    flex-direction: column;
    margin: auto;
    align-content: flex-end; 
    align-items:: flex-end;

    background-color: #29292a;
    color: white;
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
  transition: color 0.1s ease-in-out, transform 0.1s ease-in-out;

  :hover {
    color: #d06f6f;
    transform: scale(1.3);
  }
`;

export const LikeBtnActive = styled.i`
  cursor: pointer;
  color: #d06f6f;
  transition: color 0.1s ease-in-out, transform 0.1s ease-in-out;

  :hover {
    color: #d06f6f;
    transform: scale(1.3);
  }
`;

export const CharacterName = styled.span`
  margin-left: 25px;
  cursor: pointer;
  transition: opacity 0.1s ease-in-out, transform 0.1s;

  :hover {
    opacity: 0.6;
    transform: scale(0.98);
  }
`;

export const EveryItemList = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 7px 50px;

  :first-child {
    margin-top: 10px;
  }

  :last-child {
    margin: 7px 50px 10px;
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
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  height: 90%;
`;
