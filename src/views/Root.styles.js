import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: url("https://images4.alphacoders.com/653/thumb-1920-653613.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #cccccc;
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;

  height: 50px;
  width: 100vw;
  background-color: #29292a;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: nowrap;
`;

export const Logo = styled.img`
  padding-left: 10px;
  height: 50px;
  width: 80px;
`;
export const RightSection = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: nowrap;
  justify-content: flex-end;
`;

export const FavouriteBtn = styled.button`
  margin-right: 25px;
  font-weight: bold;
  color: #d06f6f;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
  transition: opacity 0.1s ease-in-out;

  :hover {
    opacity: 0.6;
  }
`;

export const LogOutBtn = styled.button`
  margin-right: 15px;
  font-weight: bold;
  color: white;
  border: none;
  background-color: #29292a;
  cursor: pointer;
  transition: opacity 0.1s ease-in-out;

  :hover {
    opacity: 0.6;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  background-image: linear-gradient(45deg, #8c8c8c, #0b0b0b);
  height: 100vh;
`;

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 500px;
  width: 500px;
  margin: auto;
  border-radius: 50%;
`;

export const LogInInput = styled.input`
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 18px;
  outline: 0;
  transition: transform 0.3s, opacity 0.3s;

  :focus {
    transform: scale(1.1);
    opacity: 0.7;
  }

  :hover {
    opacity: 0.7;
  }
`;

export const LogInBtn = styled.button`
    margin-top: 30px
    padding-top: 8px;
    width: 22%;
    height: 35px;
	  border: none;
	  border-radius: 20px;
    margin-top: -8px;
    background-color: rgba(16,89,255, 1);
    color: white;
    cursor: pointer;
    font-weight: bold;
    transition: transform .3s ease, font-size .3s ease;

    :hover {
      transform: scale(0.9) ;
      font-size: 12px;
    }
  `;
