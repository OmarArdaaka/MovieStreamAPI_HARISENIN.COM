import FooterMenuSmall from "../2-molecules/FooterMenuSmall";

const FooterMenus = [{ label: "Genre" }, { label: "Help" }];

const ContainerFooterMenuSmall = () => {
  return (
    <div className="section-footer-menu-small flex flex-col gap-2 text-[16px] font-medium w-full lg:hidden">
      {FooterMenus.map((menu, index) => (
        <FooterMenuSmall key={index} label={menu.label} />
      ))}
    </div>
  );
};

export default ContainerFooterMenuSmall;
