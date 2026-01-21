const FooterLinkList = ({ links }) => {
  return (
    <ul className="flex flex-col gap-2">
      {links.map((Link) => (
        <li key={Link.id} className="hover:text-[#3254FF] active:text-white">
          <a href={Link.href}>{Link.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinkList;
