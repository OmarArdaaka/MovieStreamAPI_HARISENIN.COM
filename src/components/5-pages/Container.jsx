import Header from "../4-templates/Header";
import Footer from "../4-templates/Footer";
const Container = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Container;
