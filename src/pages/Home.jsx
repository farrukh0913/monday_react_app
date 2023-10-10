import Header from "../components/Header";
import DocGen from "../components/Docgen";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <Header></Header>
        <Outlet />
      <DocGen></DocGen>
    </div>
  );
};

export default Home;