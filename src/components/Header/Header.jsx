import SocialMedia from "../SocialMedias/SocialMedia";
import Navigation from "./Navigation/Navigation";
import HeaderConteudo from "./HeaderConteudo/HeaderConteudo";

const Header = () => {
  return (
    <header id="home">
      <div className="header-inner">
        <div className="SocialTop">
          <SocialMedia />
        </div>
        <Navigation />
        <HeaderConteudo />
      </div>
    </header>
  );
};

export default Header;
