import {
  LogOutBtn,
  LeftSection,
  Logo,
  FavouriteBtnNav,
  RightSection,
  Header,
  FavouriteBtnNavContainer,
} from "../../views/Root.styles";
import { Link } from "react-router-dom";

const handleLogout = () => {
  localStorage.clear();
  window.location.reload();
};

const Navigation = () => {
  return (
    <Header>
      <LeftSection>
        <Link to="/">
          <Logo
            src="https://www.citypng.com/public/uploads/preview/-51608494060e1tvtjfsry.png"
            alt="logo star wars"
          />
        </Link>
      </LeftSection>
      <RightSection>
        <FavouriteBtnNavContainer>
          <Link to="/fav">
            <FavouriteBtnNav className="fa-solid fa-heart" />
          </Link>
        </FavouriteBtnNavContainer>
        <LogOutBtn onClick={() => handleLogout()}>
          Log Out <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </LogOutBtn>
      </RightSection>
    </Header>
  );
};

export default Navigation;
