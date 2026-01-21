import NavLinks from "../3-organisms/NavLinks";
import Profile from "../3-organisms/Profile";

const Header = () => {
  return (
    <div className="header bg-emerald-400 flex flex-row items-center justify-between px-5 py-2 lg:px-[80px] lg:py-[25px] sticky top-0 z-30 shadow-md">
      <NavLinks />
      <Profile />
    </div>
  );
};

export default Header;
