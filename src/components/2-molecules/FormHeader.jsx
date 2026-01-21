const FormHeader = ({ title, description }) => {
  return (
    <div className="form-header flex flex-col items-center gap-6 p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-md">
      <img
        src="/img/logo/logo.png"
        alt="Logo"
        className="w-[94px] lg:w-[163px] drop-shadow-2xl"
      />
      <div className="flex flex-col items-center gap-3">
        <h2 className="font-bold text-[18px] lg:text-[32px] text-white drop-shadow-lg">
          {title}
        </h2>
        <p className="font-normal text-white/70 text-[10px] lg:text-[16px] text-center max-w-md leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FormHeader;
