import { useNavigate, useLocation } from "react-router";

const navLinks = [
  { label: "Series", path: "/series" },
  { label: "Film", path: "/film" },
  { label: "Daftar Saya", path: "/mylist" },
];

const NavLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="wrapper-left flex flex-row items-center gap-4 lg:gap-6">
      <img
        src="/img/logo/logoSmall.png"
        alt="logo-small"
        className="logo w-[20px] h-[44px] cursor-pointer lg:hidden"
        onClick={() => navigate("/")}
      />
      <img
        src="/img/logo/logo.png"
        alt="logo-big"
        className="logo w-[103.55px] cursor-pointer hidden lg:block"
        onClick={() => navigate("/")}
      />
      <nav className="navbar-menu">
        <ul className="flex flex-row items-center gap-4 lg:gap-6 text-[10px] lg:text-[18px] text-white font-medium ">
          {navLinks.map((navLink, index) => (
            <li
              key={index}
              className={`
                cursor-pointer
                hover:text-emerald-400
                ${
                  location.pathname === navLink.path
                    ? "text-emerald-600"
                    : "text-white"
                }
                `}
              onClick={() => navigate(navLink.path)}
            >
              {navLink.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavLinks;
