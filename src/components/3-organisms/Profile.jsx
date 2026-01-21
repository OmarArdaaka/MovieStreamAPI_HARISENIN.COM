import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoPersonSharp, IoStar, IoLogOutOutline } from "react-icons/io5";

const links = [
  { label: "Profil", icon: <IoPersonSharp />, path: "/myprofile" },
  { label: "Ubah Premium", icon: <IoStar />, path: "/premium" },
  { label: "Keluar", icon: <IoLogOutOutline />, path: "/login" },
];

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="profile flex flex-row items-center text-white"
      onClick={toggleDropdown}
    >
      <div
        className="profile-container flex flex-row items-center gap-1 cursor-pointer"
        id="profileToggle"
      >
        <img
          src="/img/profile/profile1.png"
          alt="Profile"
          className="w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] rounded-full"
        />
        <FaChevronDown className="text-[10px] lg:text-[18px]" />
      </div>
      <ul
        className={`profile-dropdown ${
          isOpen ? "" : "hidden"
        } absolute right-5 lg:right-20 top-full bg-[#181A1C] shadow-md text-[10px] lg:text-[16px] z-10`}
        id="profileDropdown"
      >
        {links.map((link, index) => (
          <li
            key={index}
            className="px-3 py-2 hover:text-[#3254FF]"
            onClick={toggleDropdown}
          >
            <Link to={link.path} className="flex items-center gap-2">
              {link.icon} {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
