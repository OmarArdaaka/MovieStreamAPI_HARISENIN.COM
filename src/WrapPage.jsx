import { Outlet } from "react-router";
import Container from "./components/5-pages/Container";
const WrapPage = () => {
  return (
    <Container>
      {/* Meneruskan props ke semua child melalui context */}
      <Outlet />
    </Container>
  );
};

export default WrapPage;
