import { ButtonGroup, Button } from "monday-ui-react-core";
import docImage from "../assets/images/2.png";

const Header = () => {
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
    console.log("onSelectEvent", value);
  };
  const generateDoc = (event) => {
    console.log("Click Event", event.target.value);
  };

  return (
    <div className="Header">
      <img src={docImage} />
      <ButtonGroup onSelect={onSelectEvent} options={options} value="preview" />
      <Button onClick={generateDoc}>Generate</Button>
    </div>
  );
};

export default Header;
