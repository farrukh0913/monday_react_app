import { Button } from "monday-ui-react-core";
import { useState } from "react";
import Zendesk from "react-zendesk";
import { ZendeskAPI } from "react-zendesk";
import "../styles/Header.scss";
const ZENDESK_API_KEY = "b7c95b5d-f03b-43ab-962a-1c3bebc2b957";

const DocGen = () => {

  const [loadChat, setLoadChat] = useState(false);

  const clickEvent = () => {
    setLoadChat((preState) => {
      if (preState) {
        toggleChat("none");
        return false;
      } else {
        toggleChat("block");
        return true;
      }
    });
  };

  const toggleChat = (prop) => {
    const iframes = document.getElementsByTagName("iframe");
    if (iframes?.length > 0) {
      for (let i = 0; i < iframes.length; ++i) {
        iframes[i].style.display = prop
      }
    }
  };

  return (
    <div className="fixedBtn">
      {loadChat && (
        <Zendesk defer zendeskKey={ZENDESK_API_KEY} onLoaded={() => ZendeskAPI("messenger", "open")} />
      )}
      <Button onClick={clickEvent}>DocuGen help</Button>
    </div>
  );
};

export default DocGen;
