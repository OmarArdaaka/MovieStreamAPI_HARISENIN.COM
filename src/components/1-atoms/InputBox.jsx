const InputBox = ({
  id,
  type = "text",
  placeholder = "Masukkan Data",
  variant = "",
  className = "",
  ...rest
}) => {
  const baseStyle =
    "w-full bg-transparent font-normal rounded-[12px] text-[#ffffff] focus: border1 focus:border-white px-[12px] py-[12px] text-[12px] lg:px-[14px] lg:py-[20px] lg:text-[16px]";
  const variantStyles = {
    primary: "border-2 border-white rounded-[24px] focus:border-white",
    secondary: "border-2 border-[#E7E3FC3B] rounded-[24px] focus:border-white",
    tertiary: "border-2 border-black rounded-[24px] focus:border-black",
  };
  const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${className}`;
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={combinedClassName}
      {...rest}
    />
  );
};

export default InputBox;
