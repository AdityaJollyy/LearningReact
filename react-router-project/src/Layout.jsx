import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";

function Layout() {
  const navigation = useNavigation();

  return (
    <>
      <Header />

      {navigation.state === "loading" && <h1>Loading...</h1>}

      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;
