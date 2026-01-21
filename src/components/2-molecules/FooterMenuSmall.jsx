import { FaChevronRight } from "react-icons/fa";

const FooterMenuSmall = ({ label }) => {
  return (
    <div className="container-small flex flex-row justify-between w-full active:text-[#3254FF]">
      <a href="#">{label}</a>
      <FaChevronRight />
    </div>
  );
};

export default FooterMenuSmall;
