import { ButtonGroup, Button, Toast } from "monday-ui-react-core";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext, useCallback } from "react";
import icon from "../assets/images/2.png";
import { AppContext } from '../AppContext';
import "../styles/Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false)
  const { sharedState, setSharedState } = useContext(AppContext);
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

  const genearateDoc = useCallback(() => {
    setBtnLoading(true)
    setTimeout(() => {
      setBtnLoading(false)
      setSharedState(sharedState => !sharedState)
    }, 2000)
  }, [btnLoading])


  useEffect(() => {
    navigateToRoute();
  }, []);

  const navigateToRoute = () => {
    if (window.location.pathname === "/" || window.location.pathname === "/preview") {
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

  return (
    <div className="header">
      <img alt="icon" src={icon} height="50" width="50" />
      <ButtonGroup
        className="headder"
        onSelect={onSelectTab}
        options={options}
        value={selectedTab ? "settings" : "preview"}/>
      <Button loading={btnLoading} onClick={genearateDoc}>
        Generate
      </Button>
    </div>
  );
};

export default Header;