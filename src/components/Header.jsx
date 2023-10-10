import { ButtonGroup, Button } from "monday-ui-react-core";
import docImage from "../assets/images/2.png";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

  const onSelectEvent = (value) => {
    if (value == "preview") {
      setSelectedTab(false);
      navigate("/preview");
    } else {
      setSelectedTab(true);
      navigate("/settings");
    }
  };

  const generateDoc = (event) => {
    console.log("Click Event", event.target.value);
  };

  return (
    <div className="header">
      <img src={docImage} height="50" width="50" />
      <ButtonGroup
        className="headder"
        onSelect={onSelectEvent}
        options={options}
        value={selectedTab ? 'settings' : 'preview'}
      />
      <Button onClick={generateDoc}>Generate</Button>
    </div>
  );
};

export default Header;
