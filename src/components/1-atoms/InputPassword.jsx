import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const InputPassword = ({
  placeholder = "Masukkan Kata Sandi...",
  id,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="w-full border-2 border-[#E7E3FC3B] bg-transparent rounded-[24px] font-normal text-[#ffffff] focus: border1 focus:border-white px-[12px] py-[12px] text-[12px] lg:px-[14px] lg:py-[20px] lg:text-[16px]"
        {...rest}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

export default InputPassword;
