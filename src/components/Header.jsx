import { ButtonGroup, Button } from "monday-ui-react-core";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Header.scss";
import icon from "../assets/images/2.png";

const Header = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(false);
  const options = [
    {
      text: "Preview",
      value: "preview",
    },
    {
      text: "Settings",
      value: "settings",
    },
  ];

  useEffect(() => {
    console.log("route:", window.location.pathname);
    navigateToRoute();
  }, []);

  const navigateToRoute = () => {
    if ( window.location.pathname === "/" || window.location.pathname === "/preview" ) {
      navigate("/preview");
    } else {
      setSelectedTab(true);
      navigate("/settings");
    }
  };

  const onSelectTab = (value) => {
    if (value == "preview") {
      setSelectedTab(false);
      navigate("/preview");
    } else {
      setSelectedTab(true);
      navigate("/settings");
    }
  };

  const onGenerateDoc = (event) => {
    console.log("Click Event", event.target.value);
  };

  return (
    <div className="header">
      <img src={icon} height="50" width="50" />
      <ButtonGroup
        className="headder"
        onSelect={onSelectTab}
        options={options}
        value={selectedTab ? "settings" : "preview"}
      />
      <Button onClick={onGenerateDoc}>Generate</Button>
    </div>
  );
};

export default Header;
