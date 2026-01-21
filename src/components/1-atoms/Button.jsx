const Button = ({
  type = "button",
  children = "",
  variant = "primary",
  textColor = "primary",
  className = "",
  iconLeft = null, // Prop ikon kiri
  iconRight = null, // Prop ikon kanan
  ...rest
}) => {
  // Base Styles
  const baseStyle =
    "w-full flex justify-center items-center font-semibold rounded-[20px] lg:rounded-[24px] cursor-pointer transition-transform hover:-translate-y-1 px-[14px] py-[8px] text-[12px] lg:px-[20px] lg:py-[14px] lg:text-[16px]";
  // Variants Styles
  const variantStyles = {
    primary:
      "bg-[#10B981] hover:bg-[#059669] focus:outline focus:outline-2 focus:outline-[#34D399] active:bg-[#047857] active:text-[#D1FAE5] shadow-md hover:shadow-lg",
    secondary:
      "bg-[#2F3334] hover:bg-[#ffffff] hover:text-[#2F3334] focus:outline focus:outline-2 focus:outline-[#3D4142] active:bg-transparent active:text-[#3D4142]",
    tertiary:
      "bg-[#3D4142] border border-[#E7E3FC3B] hover:bg-[#E7E3FC0A] hover:text-[#FFFFFF] focus:outline focus:outline-2 focus:outline-[#ffffff] active:bg-gray-600 active:text-[#ffffff]",
    outlined:
      "bg-transparent border border-[#10B981] hover:bg-[#ECFDF5] hover:border-[#059669] focus:outline focus:outline-2 focus:outline-[#10B981] active:bg-[#D1FAE5] text-[#10B981]",
    green:
      "bg-[#10B981] hover:bg-[#059669] focus:outline focus:outline-2 focus:outline-[#6EE7B7] active:bg-[#047857] active:text-[#D1FAE5] shadow-md hover:shadow-lg text-white",
  };
  const textColorStyles = {
    primary: "text-[#ffffff]",
    secondary: "text-[#2F3334]",
    tertiary: "text-[#3D4142]",
  };
  //   Combined ClassName
  const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${textColorStyles[textColor]} ${className}`;

  return (
    <button type={type} className={combinedClassName} {...rest}>
      {/* Tampilkan ikon kiri jika ada */}
      {iconLeft && <span className="mr-2">{iconLeft}</span>}

      {/* Tampilkan teks/children */}
      {children}

      {/* Tampilkan ikon kanan jika ada */}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default Button;
