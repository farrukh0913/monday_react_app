import Header from "../components/Header";
import Help from "../components/Help";
import { Outlet, Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="App">
      <Header></Header>
        <Outlet />
      <Help></Help>
    </div>
  );
};

export default Home;
