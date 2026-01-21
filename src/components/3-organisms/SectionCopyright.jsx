const SectionCopyright = ({
  src,
  alt = "Logo",
  style = "w-[100px] h-auto",
  children,
}) => {
  return (
    <div className="section-copyright flex flex-col justify-center items-start content-start text-[12px] gap-4">
      <img src={src} alt={alt} className={style} />
      <p>{children}</p>
    </div>
  );
};

export default SectionCopyright;
