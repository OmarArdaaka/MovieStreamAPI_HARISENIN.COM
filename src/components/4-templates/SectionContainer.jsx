const SectionContainer = ({ sectionTitle, children }) => {
  return (
    <section className="w-full px-5 py-5 lg:py-10 lg:px-[80px] relative">
      <h2 className="text-white text-xl lg:text-2xl font-bold mb-4">
        {sectionTitle}
      </h2>
      {children}
    </section>
  );
};
export default SectionContainer;
