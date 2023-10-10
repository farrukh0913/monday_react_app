import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import DocGen from "../components/Docgen";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(()=> {
    if(window.location.pathname === '/'){
      navigate("/preview");
    }
  }, []);

  return (
    <div className="App">
      <Header></Header>
        <Outlet />
      <DocGen></DocGen>
    </div>
  );
};

export default Home;