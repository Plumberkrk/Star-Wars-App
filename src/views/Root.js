import React, { useState, useEffect } from "react";
import Page from "../components/Page/Page";
import {
  Wrapper,
  Navigation,
  LogOutBtn,
  LeftSection,
  Logo,
  FavouriteBtn,
  RightSection,
  LoginBox,
  LoginContainer,
  InputDescription,
  LogInInput,
  LogInBtn,
} from "./Root.styles";

let loginKey = {
  login: "luke",
  password: "1234",
};

const App = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState();

  useEffect(() => {
    const loggedUserLogin = localStorage.getItem("login");
    const loggedUserPassword = localStorage.getItem("password");
    if (
      loggedUserLogin == loginKey.login &&
      loggedUserPassword == loginKey.password
    ) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, []);

  const handleSubmit = () => {
    localStorage.setItem("login", login);
    localStorage.setItem("password", password);

    const a = localStorage.getItem("login");
    const b = localStorage.getItem("password");

    if (a === loginKey.login && b === loginKey.password) {
      setIsUserLoggedIn(true);
    } else {
      localStorage.clear();
      setIsUserLoggedIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  if (isUserLoggedIn == true) {
    return (
      <Wrapper>
        <Navigation>
          <LeftSection>
            <Logo
              src="https://www.citypng.com/public/uploads/preview/-51608494060e1tvtjfsry.png"
              alt="logo star wars"
            />
          </LeftSection>
          <RightSection>
            <FavouriteBtn className="fa-solid fa-heart" />
            <LogOutBtn onClick={() => handleLogout()}>
              Log Out <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </LogOutBtn>
          </RightSection>
        </Navigation>
        <Page />
      </Wrapper>
    );
  } else {
    return (
      <LoginBox>
        <LoginContainer>
          <LogInInput
            type="text"
            placeholder="login..."
            onChange={(event) => {
              setLogin(event.target.value);
            }}
          />
          <LogInInput
            type="password"
            placeholder="password..."
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <LogInBtn onClick={() => handleSubmit()}>LOG IN</LogInBtn>
        </LoginContainer>
      </LoginBox>
    );
  }
};

const Root = () => {
  return <App></App>;
};

export default Root;
